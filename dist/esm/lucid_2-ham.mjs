export const name="lucid_2-ham";
export const id="dl_e3275304774f45cb8093";
export const url=new URL("../icons/lucid_2-ham.svg?v=2d8a30016a87b71f81d3c1a443c695189979478be8bbf7a128bea4b3a04b3827",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
