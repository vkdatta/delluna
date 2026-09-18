export const name="man_3-fill";
export const id="dl_27496ad3f2494345ab87";
export const url=new URL("../icons/M/man_3-fill.svg?v=3b16eeec139050913d0a4a4cea33919fbf3d12ba5c066dd7cb6d91e8812c517e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
