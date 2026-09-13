export const name="3k_plus-fill";
export const id="dl_8e1dd19d963d4eebba02";
export const url=new URL("../icons/3/3k_plus-fill.svg?v=449d53978ad4445ed65f94c96852b20f766fe1eea9db1995e5b3930787a13ccf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
