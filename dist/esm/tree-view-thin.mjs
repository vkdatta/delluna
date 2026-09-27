export const name="tree-view-thin";
export const id="dl_462d511bef768405b818";
export const url=new URL("../icons/tree-view-thin.svg?v=cb58415ebb6f60c9584c139c4a32409ac4781111ebd22a82e158f072c18688fc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
