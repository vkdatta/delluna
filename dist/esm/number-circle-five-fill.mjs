export const name="number-circle-five-fill";
export const id="dl_bd99b2054a2347ab8524";
export const url=new URL("../icons/number-circle-five-fill.svg?v=c3d60169cf06792d44e0fb11e0409077f0709e3718e8b0fc5c0f241c8e1f9251",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
