export const name="family_home";
export const id="dl_f392b41cb40d96dd6795";
export const url=new URL("../icons/family_home.svg?v=1f3d21ddf5e57e4a2d238d6523fbc99c576cdae14b040f8473b07cb8d4221043",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
