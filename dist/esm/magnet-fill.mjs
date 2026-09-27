export const name="magnet-fill";
export const id="dl_c8e69b3e4cd646a98838";
export const url=new URL("../icons/magnet-fill.svg?v=e4211469a73d44df076ac45cabb01a49d5d1478417231137da2f60970cf6c5a1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
