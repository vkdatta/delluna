export const name="indeterminate_question_box-fill";
export const id="dl_1f918ce8601eb8f45c78";
export const url=new URL("../icons/indeterminate_question_box-fill.svg?v=e7d3b51a9227ca0c52d31aba553d4164ba1738bd3d941f8040251bf81a95a333",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
