export const name="lucid_3-navigation-off";
export const id="dl_a324f7d832b04477b225";
export const url=new URL("../icons/lucid_3-navigation-off.svg?v=662b770ab777bfa85a5ee69d159662a51ed57f89be0dbfa8a5579375ab64849a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
