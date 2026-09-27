export const name="users-three-light";
export const id="dl_c2ecfe801747cb5c2a37";
export const url=new URL("../icons/users-three-light.svg?v=04bedfd2160f4cf79aa04057ce6b51733b06273122af53eac42649d503e22a1d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
