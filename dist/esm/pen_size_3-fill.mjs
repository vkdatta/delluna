export const name="pen_size_3-fill";
export const id="dl_2c4b89539eeeebb08df8";
export const url=new URL("../icons/pen_size_3-fill.svg?v=856c0bab05b9b774eb0d7ac11f08ab9ebb7b511be1f2f0ae43fb1a87bc939eeb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
