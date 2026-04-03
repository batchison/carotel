var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "carotel-and-pretext",
  "level": "1",
  "url": "carotel-and-pretext.html",
  "type": "Section",
  "number": "1",
  "title": "CA-ROTEL and PreTeXt",
  "body": " CA-ROTEL and PreTeXt   Career and AI Readiness while Remixing Open Textbooks through an Equity Lens ( CA-ROTEL ) is a multi-year grant offered through the Department of Education Open Textbook Pilot Program.  PreTeXt is a versatile free authoring system. Among its developers’ guiding principles is the recognition of the inherent value in producing material that is accessible to everyone. Whether authoring a textbook, scholarly article, in-class assessment, or weekly handout, PreTeXt affords authors the opportunity to broaden the scope of what they can offer in their classes and their academic discipline.    The Framingham State PreTeXt Working Group  In response to the federal rule on accessibility of web content and mobile apps provided by state and local governments, in the Spring of 2026 a Framingham State University PreTeXt Working Group was created by the faculty, with the central goal of creating accessible course documents.  This site contains sample course items created in PreTeXt by working group members.  Unless otherwise stated, all content carries with it a CC-BY-SA Creative Commons license.    CA-ROTEL Support  This project is supported entirely through the CA-ROTEL grant.  The CA-ROTEL Project (focused on Career Readiness and Artificial Intelligence) is fully funded by the U.S. Department of Education’s grant from the Fund for the Improvement of Postsecondary Education, (FIPSE). The Department does not mandate or prescribe practices, models, or other activities described or discussed in this publication. The contents of this Open Educational Resource (OER) may contain examples of, adaptations of, and links to resources created and maintained by another public or private organization. The Department does not control or guarantee the accuracy, relevance, timeliness, or completeness of this outside information. The contents of the OER materials do not necessarily represent the policy of the Department of Education, and an endorsement by the Federal Government should not be assumed.   "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
