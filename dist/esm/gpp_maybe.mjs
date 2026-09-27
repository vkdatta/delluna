export const name="gpp_maybe";
export const id="dl_da85dad2a1c8290837b6";
export const url=new URL("../icons/gpp_maybe.svg?v=6d86f84a297dc5a8e9d8eb5877dd97578ed7b757b692fc8cb23476f85d24ace8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
