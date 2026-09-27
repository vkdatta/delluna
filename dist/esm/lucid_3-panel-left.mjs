export const name="lucid_3-panel-left";
export const id="dl_f3d92b2e446a4ea48206";
export const url=new URL("../icons/lucid_3-panel-left.svg?v=ad96da90bc9122cb87dd5510be880a16432dce011b467cdbdf70f56414b5e191",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
