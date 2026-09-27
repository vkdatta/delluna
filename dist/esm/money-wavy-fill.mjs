export const name="money-wavy-fill";
export const id="dl_d0e3c34cdc8b41f8b0e1";
export const url=new URL("../icons/money-wavy-fill.svg?v=d3d6b6beecadec8b2413383ea5708ab86631fe163cf5da2271c5542bb3ecd802",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
