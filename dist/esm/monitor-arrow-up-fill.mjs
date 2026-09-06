export const name="monitor-arrow-up-fill";
export const id="dl_7ec92fec1dfa4a0a94fe";
export const url=new URL("../icons/monitor-arrow-up-fill.svg?v=9519c0c4c734553167b598b03d493cdb6ef14f8df8c7283a1847699bcc33a0a8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
