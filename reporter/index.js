module.exports = function () {
    return {

        reportTaskStart(startTime, userAgents, testCount) {
            this.write(`Start running the tests, should start the execution here`).newline().newline();
        },

        reportFixtureStart(name, path) {
            this.currentFixtureName = name;
        },

        reportTestStart(name, testMeta) {
            this.newline().write('==================================================');
            this.newline().write(`Test '${this.currentFixtureName} - ${name}' started`);
            this.newline().write(`Timestamp ${Date.now()}`);
            this.newline().write('Should notify test start here');

        },

        reportTestDone(name, testRunInfo) {
            this.newline();
            const errors = testRunInfo.errs;
            const warnings = testRunInfo.warnings;
            const hasErrors = !!errors.length;
            const result = testRunInfo.skipped ? 'skipped' : (hasErrors ? 'failed' : 'passed');

            this.newline().write(`Test '${this.currentFixtureName} - ${name}' ended`);
            this.newline().write(`Timestamp ${Date.now()}`);
            this.newline().write(`Result ${result}`);
            this.newline().write(`Duration ${testRunInfo.durationMs} ms`);
            this.newline().write('Should notify test end here');
            this.newline().write('==================================================');

        },

        reportTaskDone(endTime, passed, warnings, result) {
            this.newline().write('Finished running the tests, should end the execution here');
        }

    };
};
