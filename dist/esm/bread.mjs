export const name="bread";
export const id="dl_c78bf1aa4bf34886a6f0";
export const url=new URL("../icons/bread.svg?v=a6623f8c06b3641911166bb952227513d4d2ac162954f4f9bcef956be621ad8e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
