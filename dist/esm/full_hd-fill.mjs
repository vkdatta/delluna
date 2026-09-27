export const name="full_hd-fill";
export const id="dl_def424cfafaab618ecfb";
export const url=new URL("../icons/full_hd-fill.svg?v=fd6ddfbe1600a1b66edf9007be9b5b82548e6be36a3597819d86513f35b3df5e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
