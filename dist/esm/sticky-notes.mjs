export const name="sticky-notes";
export const id="dl_5682c307aa9244de81b6";
export const url=new URL("../icons/sticky-notes.svg?v=b9ce2f4b8ed7690777bdcd8b93b2bc237ff6d6690524e36a5af1bc378c55a2c6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
