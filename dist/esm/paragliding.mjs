export const name="paragliding";
export const id="dl_a2d68b4d495654271316";
export const url=new URL("../icons/paragliding.svg?v=a22424618d0620851a092a685a15c5229da934c4111e1da27e1b16f9d3c09862",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
