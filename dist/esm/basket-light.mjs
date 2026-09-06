export const name="basket-light";
export const id="dl_aa8b318d3e3b42c39bf8";
export const url=new URL("../icons/basket-light.svg?v=c7c014cb75b386200c8c4e5b5a9d433c4949650b65a59983ee760f071a6d64a0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
