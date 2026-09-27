export const name="filter_2";
export const id="dl_0f030e444dc14de261a0";
export const url=new URL("../icons/filter_2.svg?v=82c4740e1491ee6aabeb3a51df54146344b394bc7696c79aab83d420d3bf4b06",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
