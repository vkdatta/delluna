export const name="genres-fill";
export const id="dl_e3701a55b6294b6670c5";
export const url=new URL("../icons/genres-fill.svg?v=7802d26e4d88d7b373cfa1cc09cc34f058a1946b0cce26e3ebdf266967da2360",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
