export const name="grains-fill";
export const id="dl_d991aeb7f5264225a147";
export const url=new URL("../icons/grains-fill.svg?v=326a7ad6b4e660b7e8152557cb6827b67ed425a01d37ebd626230459e1036759",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
