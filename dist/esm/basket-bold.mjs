export const name="basket-bold";
export const id="dl_d7e6b2beee854c678e54";
export const url=new URL("../icons/basket-bold.svg?v=103daa5881f0535097e6c77a0fbef307a02c65ee089fba53027b82fc290f22b8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
