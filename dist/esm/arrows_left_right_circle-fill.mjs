export const name="arrows_left_right_circle-fill";
export const id="dl_12e649299bda8bbcbabd";
export const url=new URL("../icons/arrows_left_right_circle-fill.svg?v=6b071f0a97f40f473dabea1fd6fffdab982d5b1d30d549a0c8c2c1936ccb26aa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
