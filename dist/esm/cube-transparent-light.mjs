export const name="cube-transparent-light";
export const id="dl_c2b62a14937d43fab2fe";
export const url=new URL("../icons/cube-transparent-light.svg?v=51ddbe4ac7000b2d0ea61d5a3fa8fe9d5158c17872f92ba9bbd9de636a44d771",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
