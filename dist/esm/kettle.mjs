export const name="kettle";
export const id="dl_96cb1a37801521b7d2d5";
export const url=new URL("../icons/kettle.svg?v=ee8748591e9ac666a6a0edc0bfa947dc7c3959340552d97bd31555355f1c9a6a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
