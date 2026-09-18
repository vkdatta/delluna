export const name="hov-fill";
export const id="dl_0113d313f98e4196a73f";
export const url=new URL("../icons/H/hov-fill.svg?v=5588ad7a3b40f61b83a128ecab96cf479147182438d75d6567767c15361ba3ba",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
