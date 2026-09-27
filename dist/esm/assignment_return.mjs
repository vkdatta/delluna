export const name="assignment_return";
export const id="dl_e0a752ea13d835d2d484";
export const url=new URL("../icons/assignment_return.svg?v=07d6051c6786115d8ebdde57a4c3150470c44be8888ac30bf2f8a191062394fd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
