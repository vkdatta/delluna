export const name="3k_plus";
export const id="dl_0ddb8531f478ff79183a";
export const url=new URL("../icons/3k_plus.svg?v=d14201349cf9d24ef84c66a5bd20e122479d7a7939a56a7483bb5c04fa1d622f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
