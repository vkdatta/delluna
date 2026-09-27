export const name="lucid_3-music";
export const id="dl_e0ee30c8541146b3b5ca";
export const url=new URL("../icons/lucid_3-music.svg?v=5b5146b423e0b6becb91e842f7fdf74fb1521e22ded265619f483a8198780e92",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
