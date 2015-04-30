(function () {
	'use strict';

	angular
		.module('resume')
		.factory('ResumeService', ResumeService);

	ResumeService.$inject = ['$http'];

	function ResumeService($http) {
		var service = {
				getResume: getResumeData
			};

		return service;

		function getResumeData() {
			var request = $http.get('data/resume.json');

			return request.then(handleSuccess, handleError);
		}

		function handleSuccess(response) {
			return response.data;
		}

		function handleError(response) {
			if (!angular.isObject(response.data) || !response.data.message) {
				return ($q.reject("An unknown error occurred."));
			}

			return ($q.reject(response.data.message));
		}
	}
})();