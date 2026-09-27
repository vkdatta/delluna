export const name="kitchen-fill";
export const id="dl_36060423da9351796890";
export const url=new URL("../icons/kitchen-fill.svg?v=b9ba0920f8a909ee4ea61689c0301e60899870ec7270e699acd7f73fc3f2c504",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
