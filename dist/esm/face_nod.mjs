export const name="face_nod";
export const id="dl_5e965911a28d81a2a82a";
export const url=new URL("../icons/face_nod.svg?v=109c6b939166e62af08488ed3527b64899497c2d76d2b9aa0bd6923747a1fa53",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
