export const name="lucid_2-flower-2";
export const id="dl_cd8b993ca9a049afa77e";
export const url=new URL("../icons/lucid_2-flower-2.svg?v=2970403ea1bd627f5bdc6c798f358855df095c517529a913b0b8d890c685e857",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
