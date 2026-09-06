export const name="castle-turret-light";
export const id="dl_7fd2e4db689947819bc3";
export const url=new URL("../icons/castle-turret-light.svg?v=781920c8cc873314cec261a145b7ad89036bd438c5cb9898107ae523809ecf03",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
