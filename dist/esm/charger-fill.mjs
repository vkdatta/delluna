export const name="charger-fill";
export const id="dl_e0c639533d5af3f6546e";
export const url=new URL("../icons/charger-fill.svg?v=81c95ff0185856831ad9c83af9f18a63c0fe044ece0e9147214b0a7393c5a351",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
