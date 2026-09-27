export const name="sketch-logo-light";
export const id="dl_ba70e9b77654e3e8e1fa";
export const url=new URL("../icons/sketch-logo-light.svg?v=36c831e3f07215d3adea7c1e6633af949a111836c14cdc9549e2c5f11fc96cac",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
