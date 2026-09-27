export const name="circle-notch-light";
export const id="dl_3f208599b89c4107bbe7";
export const url=new URL("../icons/circle-notch-light.svg?v=d595209e259db9f6b1ddeba5465de43ea7fd40966c9c690809c1e8529d8fa750",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
