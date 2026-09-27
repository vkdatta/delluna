export const name="lucid_3-mouse-off";
export const id="dl_a0312b1121764f62a67e";
export const url=new URL("../icons/lucid_3-mouse-off.svg?v=219679c19f2a00beeea7fba0d5d6f51d5f17cfee1899554ac67a39a1c3ac023a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
