export const name="crossword-fill";
export const id="dl_3d784cd4720541c992d1";
export const url=new URL("../icons/crossword-fill.svg?v=bc84ed07ce634296b2126dc19ec82ae75c88fdebff265f49e6d08d54cb2b5d47",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
