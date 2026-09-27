export const name="microwave_gen-fill";
export const id="dl_2075650e24022b6d325a";
export const url=new URL("../icons/microwave_gen-fill.svg?v=1eab09b71739044e4224237e9705be377355ed1823a4d0454d2417d48349b656",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
