function processPage(page)
{
  if(this.config.options.generator !== 'pdf') return page

  var level = page.progress.current.level
  if(level.split('.').length === 1) level += '.'

  page.content = page.content.replace(/^#+ +/, function(match)
  {
    return match + level + ' '
  })

  return page
}


exports.hooks =
{
  // Before parsing markdown
  'page:before': processPage
}
