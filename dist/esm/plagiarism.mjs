export const name="plagiarism";
export const id="dl_99feb400cf9946869f60";
export const url=new URL("../icons/P/plagiarism.svg?v=0e43d8c1e1d089e63e591639475ec0bb35382904f98f9ed0731448a880e759a7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
