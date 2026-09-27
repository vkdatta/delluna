export const name="windshield_defrost_auto";
export const id="dl_481dcefc752657e222db";
export const url=new URL("../icons/windshield_defrost_auto.svg?v=f16cf11e55628ec514250e1ca7ff74dde3b39888e15984ae847c6b3bd7196481",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
