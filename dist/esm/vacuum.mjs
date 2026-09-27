export const name="vacuum";
export const id="dl_1289e2ff225b46d06467";
export const url=new URL("../icons/vacuum.svg?v=a81c0017d6a879b3a350422e2a5886969dec321c91ea3e2d1100eee3b9e26e95",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
