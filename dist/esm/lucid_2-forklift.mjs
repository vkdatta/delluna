export const name="lucid_2-forklift";
export const id="dl_0dbfddad55aa470ab3a1";
export const url=new URL("../icons/lucid_2-forklift.svg?v=7b9763d0b7eb9c21604a615f658671796e190b758e3adbde29702b9312180176",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
