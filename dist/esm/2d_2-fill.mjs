export const name="2d_2-fill";
export const id="dl_506e177571ea69387437";
export const url=new URL("../icons/2d_2-fill.svg?v=3c4171ebb9cdc5f95ae937c775a3c87c2e81ac8bde2e908eae9d9df6fda9bb7b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
