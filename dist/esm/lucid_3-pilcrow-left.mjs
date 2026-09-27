export const name="lucid_3-pilcrow-left";
export const id="dl_997cb987f98b4f45b2bf";
export const url=new URL("../icons/lucid_3-pilcrow-left.svg?v=31708e25453670c733437dd7486fe4b765ee3a6218f780f69b240d0fbab2564b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
