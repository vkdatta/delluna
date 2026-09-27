export const name="wall_lamp-fill";
export const id="dl_47bd62fd0a0003ba2d00";
export const url=new URL("../icons/wall_lamp-fill.svg?v=76d156b5c638e2a1e4b0b4b3ef52de038a0940681d0bbb3ca0351d9fa14e8de8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
