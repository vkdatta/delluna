export const name="linktree-logo-bold";
export const id="dl_847fa745eb924802badf";
export const url=new URL("../icons/linktree-logo-bold.svg?v=9495bed38386e185db2931b3e06df36a0c355f26fdc938dd77556c78c78068bd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
