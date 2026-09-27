export const name="lucid_1-bookmark-check";
export const id="dl_8db5a11b4db4403483f2";
export const url=new URL("../icons/lucid_1-bookmark-check.svg?v=0af32a5a0211266f0fe039b683cb6ff48a24e41939771f0e1e66f3445a0066cb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
