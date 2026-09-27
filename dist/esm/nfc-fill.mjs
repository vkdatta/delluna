export const name="nfc-fill";
export const id="dl_b198f5c4c43befcf65f2";
export const url=new URL("../icons/nfc-fill.svg?v=ba3db88b64b61ce301b59dd834d9e3c1a25f322b3f53405afaf156015b106b79",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
