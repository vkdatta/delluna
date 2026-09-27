export const name="file-c";
export const id="dl_5c7efbe0c5b04907955e";
export const url=new URL("../icons/file-c.svg?v=5bc641db56193be9c1750f535a1819da14b6826aff872cc93febf2a9b19966b9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
