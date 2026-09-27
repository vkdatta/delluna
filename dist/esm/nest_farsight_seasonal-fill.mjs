export const name="nest_farsight_seasonal-fill";
export const id="dl_34fa2e50f393d8a61f11";
export const url=new URL("../icons/nest_farsight_seasonal-fill.svg?v=82e76897983a237e222f1fce4a4d6f8eb7e4b88a8fe7d3f67160a94c3b0f0dcf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
