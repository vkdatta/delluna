export const name="airplane-landing-light";
export const id="dl_d0cf9956702b4aa9a58d";
export const url=new URL("../icons/airplane-landing-light.svg?v=c338d3dbf2ab26257dc415a5e0fcc7304c3327770b8738d315933abd2c0e5d57",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
