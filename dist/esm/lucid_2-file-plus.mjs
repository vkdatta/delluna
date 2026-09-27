export const name="lucid_2-file-plus";
export const id="dl_a1c74c6eb5a444738836";
export const url=new URL("../icons/lucid_2-file-plus.svg?v=c5be76207766bbe9df5b69865b48ac65264c2fc97eaea1e92683af4db4469106",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
