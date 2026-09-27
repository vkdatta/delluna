export const name="folder-minus-light";
export const id="dl_e803c594b0d34f04bca8";
export const url=new URL("../icons/folder-minus-light.svg?v=5c88a9e0ea1b5d83ca5d648aacb34b652d826936d1df683595a22a660bfe10b2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
