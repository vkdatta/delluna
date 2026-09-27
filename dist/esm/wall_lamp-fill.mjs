export const name="wall_lamp-fill";
export const id="dl_851a9b9adf9b5e8c2ee9";
export const url=new URL("../icons/wall_lamp-fill.svg?v=6504172fd790e5626c2ab97657c288d95eddc17e0ba87accc6a419864bb7e2b8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
