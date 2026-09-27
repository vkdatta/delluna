export const name="layers_clear";
export const id="dl_29b2c1207dba619cb3d7";
export const url=new URL("../icons/layers_clear.svg?v=eb189d89da35d7222cb94dfa7c04cffae2a8c5d4b693ce3598c0ca9339b09d55",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
