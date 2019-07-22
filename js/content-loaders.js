function loadTemplate(templateName, domSelector) {
	templateName = templateName.indexOf('/page/partial/') == 0 ? templateName : '/page/partial/' + templateName;
	templateName += templateName.indexOf('.html') > 0 ? '' : '.html';
	console.log('templateName: ', templateName);
	$.ajax({
		url: templateName,
		context: $(domSelector)
	}).done(function (data) {
		$(this).empty().append(data);
	});
}

function loadSubPageTemplate(templateName) {
	loadTemplate(templateName, 'div.page-content');
}

function loadIndexPageTemplate(templateName) {
	loadTemplate(templateName, 'div.page-container');
} 
