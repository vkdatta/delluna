export const name="8mp-fill";
export const id="dl_7ba7dc9ed61118195204";
export const url=new URL("../icons/8mp-fill.svg?v=e84912260f27a192d1d397e070a2b1426e2c5b489445e846cc3123b70272f23e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
