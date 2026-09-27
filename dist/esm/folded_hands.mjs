export const name="folded_hands";
export const id="dl_655937356130f79c2c86";
export const url=new URL("../icons/folded_hands.svg?v=3f4c4579d9862fe3529ec07c629ec528830963e1c6e32f6a4013ceb1e9b174df",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
