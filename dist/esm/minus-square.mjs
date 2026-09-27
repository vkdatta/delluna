export const name="minus-square";
export const id="dl_2b186086b0b0461abec7";
export const url=new URL("../icons/minus-square.svg?v=63e74003f1a294cda310cadeee1d8186c4e6377b1ae9545a92696cf19027f27e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
