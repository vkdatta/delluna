export const name="keep_public-fill";
export const id="dl_f908fa156891b3b5864d";
export const url=new URL("../icons/keep_public-fill.svg?v=6670608af47fd5d98cef168d64240ed9b14f6af8290b797cddbd292bbc486636",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
