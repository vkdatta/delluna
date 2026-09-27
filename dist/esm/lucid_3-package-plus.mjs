export const name="lucid_3-package-plus";
export const id="dl_2a1db794ac88496d8213";
export const url=new URL("../icons/lucid_3-package-plus.svg?v=6a60f0433a0f6a8e291f1b0c6cfed91b3e68d0bde6ffd997dad26af99f5be455",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
