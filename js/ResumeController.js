/// <reference path="../typings/angularjs/angular.d.ts"/>

(function () {
	'use strict';
	
	angular
		.module('resume')
		.controller('ResumeController', ResumeController);

	ResumeController.$inject = ['ResumeService'];

	function ResumeController(ResumeService) {
		var model = this;

		(function load() {
			ResumeService.getResume().then(success, error);
		})();

		function success(data) {
			model.resume = data;
		}

		function error(errorMessage) {
			console.warn(errorMessage);
		}
	}
})();