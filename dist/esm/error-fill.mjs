export const name="error-fill";
export const id="dl_ca6590d5812040e3ba12";
export const url=new URL("../icons/E/error-fill.svg?v=711a8f7504cd32f1d3af2d064e60256a2f8a0225829cdd88b4fa802a143580ac",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
