export const name="mobile_loupe";
export const id="dl_2592a29b46a71905d641";
export const url=new URL("../icons/mobile_loupe.svg?v=0d73386f7803791f219c91d37190484a3aad208dfdd237f2d40800d75e2e0e82",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
