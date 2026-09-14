export const name="arrow_circle_up-fill";
export const id="dl_1a6d42eaae344cc6ac72";
export const url=new URL("../icons/A/arrow_circle_up-fill.svg?v=757bde26ecd256f13a8e4c2785e1c8fd769b474c0105a4cd50f8d50c64f74aee",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
