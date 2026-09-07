export const name="arrow-bend-double-up-right-light";
export const id="dl_3792b9dfc8ae4599b25b";
export const url=new URL("../icons/arrow-bend-double-up-right-light.svg?v=a61878ba73f9ac42dbd9031ff2ec15ec0615a5121b9485c9c5edb0385cf162a1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
