export const name="electric_bolt";
export const id="dl_786244b76490ca98f936";
export const url=new URL("../icons/electric_bolt.svg?v=901f909bce4cdcc7f3d9565e471f510ae7dd4d5c6d55dede72c98bfbc748a4fb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
