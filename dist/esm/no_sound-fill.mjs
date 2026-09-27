export const name="no_sound-fill";
export const id="dl_fa511a0e8cb27297828c";
export const url=new URL("../icons/no_sound-fill.svg?v=2da281e1ab56302f171952952d9710ade9428a6a81a1c977d191aa177294ab53",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
