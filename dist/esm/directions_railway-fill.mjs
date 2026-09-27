export const name="directions_railway-fill";
export const id="dl_fcbdc7030a86355d5274";
export const url=new URL("../icons/directions_railway-fill.svg?v=69d96debacaaaabd5392ac356b4d83d958d2787ecdfa34059fa8dab603589a38",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
