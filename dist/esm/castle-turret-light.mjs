export const name="castle-turret-light";
export const id="dl_7fd2e4db689947819bc3";
export const url=new URL("../icons/castle-turret-light.svg?v=cf68a009a6a94d72ee2fb6fee28f4bd9d14f0323358d57d9498792888791e210",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
