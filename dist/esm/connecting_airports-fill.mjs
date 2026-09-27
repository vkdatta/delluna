export const name="connecting_airports-fill";
export const id="dl_848caa226dc04cdb282a";
export const url=new URL("../icons/connecting_airports-fill.svg?v=81e0a2210c36246cc1c28450c5427239f335509eb08ddea7a11cf0abf87a5265",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
