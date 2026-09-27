export const name="hand-eye-fill";
export const id="dl_20698bb714ea442f8923";
export const url=new URL("../icons/hand-eye-fill.svg?v=8b519f742b62df75c9fa840d8cf9087d71d8974f103362690ad6f03acf20d2d3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
