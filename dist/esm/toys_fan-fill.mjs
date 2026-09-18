export const name="toys_fan-fill";
export const id="dl_19c38f69a0f64a1e8568";
export const url=new URL("../icons/T/toys_fan-fill.svg?v=0faa72bf9e330fa4d16f3ba3169fa03269780077676957b06dcee962aac21de5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
