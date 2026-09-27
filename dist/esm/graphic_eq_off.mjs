export const name="graphic_eq_off";
export const id="dl_a4d6f83751926f6f7560";
export const url=new URL("../icons/graphic_eq_off.svg?v=31ff264f237b5bccc6ae0df5f9e11532fe19ad107190ad8dc06180998c9014f6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
