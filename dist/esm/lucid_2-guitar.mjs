export const name="lucid_2-guitar";
export const id="dl_63c8daf2b0bf479484ab";
export const url=new URL("../icons/lucid_2-guitar.svg?v=77c8813c3e444154d3d21cde211646c7fffbe55f6b272c44206f4f43c05f0994",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
