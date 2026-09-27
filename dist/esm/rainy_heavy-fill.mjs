export const name="rainy_heavy-fill";
export const id="dl_9f999fa93b568305b66e";
export const url=new URL("../icons/rainy_heavy-fill.svg?v=1985b1dbd388913d4e9dd2ba73e4c7e17c81997d06c38345c7c3e1af3ddcaf39",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
