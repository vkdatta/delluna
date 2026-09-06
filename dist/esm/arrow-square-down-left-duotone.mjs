export const name="arrow-square-down-left-duotone";
export const id="dl_c93f71de848c4c9aa11b";
export const url=new URL("../icons/arrow-square-down-left-duotone.svg?v=fa7998833433e67950e467edf89aa2cb91eaa0b5c1e3bc1c38ad7e3f8542d7bc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
