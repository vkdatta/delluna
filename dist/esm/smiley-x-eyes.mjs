export const name="smiley-x-eyes";
export const id="dl_a6f6b8719738a1980c8a";
export const url=new URL("../icons/smiley-x-eyes.svg?v=802c9c55199acd46dbf51681c2daac766c4e3de803af1d63c888740ee5ae2f3d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
