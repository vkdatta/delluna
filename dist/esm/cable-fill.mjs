export const name="cable-fill";
export const id="dl_e58f985d0bce0ccf5a7a";
export const url=new URL("../icons/cable-fill.svg?v=34dab92d6872f726aef02000797306ab077602c473362948e9fc80cb32a61b54",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
