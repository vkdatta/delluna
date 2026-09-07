export const name="sun-snow";
export const id="dl_c9607f4f5f9f49beab6f";
export const url=new URL("../icons/sun-snow.svg?v=1ff0eaaa5abcf493bbe6d8cde7696bec3f90174c81de9e9acd197f641a0d0db3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
