export const name="toggle-right";
export const id="dl_649f886d4f8fd1dfd8ec";
export const url=new URL("../icons/toggle-right.svg?v=3f894dbb99300392ddf05e4aa8f1b854dce6e8872de437c1c4a86dcbf9a56cce",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
