export const name="arrow-circle-down-light";
export const id="dl_4ab8702055c04fc69946";
export const url=new URL("../icons/arrow-circle-down-light.svg?v=f9a8856165c23de3d8d974676f66fdbd2e9060fe718dbf5f34f3ab73fdae2574",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
