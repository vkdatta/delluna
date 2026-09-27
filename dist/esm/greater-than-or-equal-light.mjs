export const name="greater-than-or-equal-light";
export const id="dl_033b61063c84434c99e2";
export const url=new URL("../icons/greater-than-or-equal-light.svg?v=183516344a386cb34fca83f57b5326645bbb940b7e2f15219d387a4b06a28a47",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
