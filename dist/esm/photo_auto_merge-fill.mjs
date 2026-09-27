export const name="photo_auto_merge-fill";
export const id="dl_e5d90426850ff7e758ff";
export const url=new URL("../icons/photo_auto_merge-fill.svg?v=71cb12ff0fffe607644ef418bb5a521fe7a71e41a11b21c40e1e326ad49e73ff",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
