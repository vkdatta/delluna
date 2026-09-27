export const name="view_comfy-fill";
export const id="dl_bf31d3058aeba87180f6";
export const url=new URL("../icons/view_comfy-fill.svg?v=8e7f86c0fc3df7f9d96bbc691c19aed3b1a7b558871a923ca0f09e300e2fe53b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
