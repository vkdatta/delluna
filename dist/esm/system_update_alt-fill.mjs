export const name="system_update_alt-fill";
export const id="dl_a6a9c099245937bade9c";
export const url=new URL("../icons/system_update_alt-fill.svg?v=8b31f1d2cb3b7fcefeab7be526d765b5e2204da3c0730d1cd63274f32cdece77",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
