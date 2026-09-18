export const name="settings_b_roll";
export const id="dl_9babef3490c3492f92b7";
export const url=new URL("../icons/settings_b_roll.svg?v=c3d437acea837344fd489dfd2beeb1528dbe74d0c5dbbcee00d59e4dca084086",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
