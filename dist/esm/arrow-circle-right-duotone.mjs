export const name="arrow-circle-right-duotone";
export const id="dl_979b4fe2322b41598de9";
export const url=new URL("../icons/arrow-circle-right-duotone.svg?v=40dca61a0b6aa02b573867c6e09456aabf8e89d574994517520c6a746751aac2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
