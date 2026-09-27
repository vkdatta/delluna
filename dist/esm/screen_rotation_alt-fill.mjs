export const name="screen_rotation_alt-fill";
export const id="dl_c61ea2c2e7b73c7dbd91";
export const url=new URL("../icons/screen_rotation_alt-fill.svg?v=c7290b0a6ba247007b05acbd1cf6bfdd22be31d00ab0108aaa8ae70a70fa8411",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
