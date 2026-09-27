export const name="smiley-sticker-thin";
export const id="dl_39144182f0ab513bb86e";
export const url=new URL("../icons/smiley-sticker-thin.svg?v=b427a5365d193993ce805a8abc7320553958e8efc259354f226fbdd87daa1a3d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
