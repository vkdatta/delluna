export const name="arrow-bend-double-up-right-light";
export const id="dl_3792b9dfc8ae4599b25b";
export const url=new URL("../icons/arrow-bend-double-up-right-light.svg?v=c24f848ebf0ae5f7a5324f14cd26234c79109193a95d6c3afb423ca16c982364",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
