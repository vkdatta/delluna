export const name="lucid_3-package-plus";
export const id="dl_2a1db794ac88496d8213";
export const url=new URL("../icons/lucid_3-package-plus.svg?v=f35520f7724d7171f3355a2d2b9d1cee9ae851c8048db4832d47be93e65b04c1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
