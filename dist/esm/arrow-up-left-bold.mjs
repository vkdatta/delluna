export const name="arrow-up-left-bold";
export const id="dl_dbe0837521e142e1ba0c";
export const url=new URL("../icons/arrow-up-left-bold.svg?v=edf564101793ab3f07d5897e419b75f0af771c12ab4fc811986a1a75a7c09988",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
