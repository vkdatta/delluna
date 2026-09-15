export const name="familiar_face_and_zone-fill";
export const id="dl_b4e76eb97ded48c7b969";
export const url=new URL("../icons/F/familiar_face_and_zone-fill.svg?v=ced7f5b84a560f16245d1ee87545faf2d9e7d0231f7523c08bffb9c65aa55695",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
