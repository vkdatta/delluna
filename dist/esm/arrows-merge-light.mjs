export const name="arrows-merge-light";
export const id="dl_b60f4ffe56b4423fa185";
export const url=new URL("../icons/arrows-merge-light.svg?v=982e1ef702e88d91f4e5cfc58a2f15a852f0447e8605c4a835a5944d2b54dbac",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
