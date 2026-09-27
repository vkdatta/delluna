export const name="paper-plane-tilt-duotone";
export const id="dl_aeb249cf7b7347c6b48e";
export const url=new URL("../icons/paper-plane-tilt-duotone.svg?v=1ca9e5f1a3fa19d5650d0eba98333e3a4b82de44d6c37ea190dc0b793781b4b9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
