export const name="arrow-square-out-light";
export const id="dl_ae63f64b8b194a51bcab";
export const url=new URL("../icons/arrow-square-out-light.svg?v=55383278d16838ca050f2dc63ff40f77206f0bc7e4f125ea44f80973d161ba9c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
