export const name="selection-slash-duotone";
export const id="dl_49c4be4ae6141392c1b9";
export const url=new URL("../icons/selection-slash-duotone.svg?v=1051bbb2204e8aefc129ca16432aaa7b5e1c053305d91435e0873e64d7a0e185",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
