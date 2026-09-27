export const name="keyboard_hide-fill";
export const id="dl_7d0e81df19ecd415c56b";
export const url=new URL("../icons/keyboard_hide-fill.svg?v=69dc44a421982e6207f4e55f5608c7f9b430f65fd079d7307147393e0eda78a1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
