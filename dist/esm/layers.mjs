export const name="layers";
export const id="dl_d17526dcf10545de8806";
export const url=new URL("../icons/L/layers.svg?v=139a9e1b5739ad23bb9100f7567b9cb0e3ef2cd5dda3dd154fad71dcb4a46e3a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
