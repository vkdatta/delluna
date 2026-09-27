export const name="gas-pump-fill";
export const id="dl_c589f67b6e60482882d5";
export const url=new URL("../icons/gas-pump-fill.svg?v=c4018c290bb9cebabb6457a0d202b06feabd6cfba0e1f90403bce909786ffee4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
