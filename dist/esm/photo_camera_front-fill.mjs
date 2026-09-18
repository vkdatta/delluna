export const name="photo_camera_front-fill";
export const id="dl_398e2b9e68234d7e8ed7";
export const url=new URL("../icons/photo_camera_front-fill.svg?v=9b37f9aa094333d9516e9c7e81b82e4e0a0dd1c69cc68594a315ee98f4c41a47",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
