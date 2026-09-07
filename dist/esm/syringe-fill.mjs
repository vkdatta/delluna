export const name="syringe-fill";
export const id="dl_790d117e8e8c4335a799";
export const url=new URL("../icons/S/syringe-fill.svg?v=cdf926c6581c60c6fdf7f47d7b2b60aef447e86ef76d9e2b4fdf11ee668f3064",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
