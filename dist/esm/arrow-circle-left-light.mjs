export const name="arrow-circle-left-light";
export const id="dl_ae1735466f3344459667";
export const url=new URL("../icons/arrow-circle-left-light.svg?v=62bbd3d92752533442830ac32683c3a6ddbd70c75b8e3bfe28184927f05d5e35",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
