export const name="basket-light";
export const id="dl_aa8b318d3e3b42c39bf8";
export const url=new URL("../icons/basket-light.svg?v=4aa38dc5b4fac3a458dc986c498811313403f7870ab9b770ecdeba726643beaa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
