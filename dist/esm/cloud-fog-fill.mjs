export const name="cloud-fog-fill";
export const id="dl_d33db3d5847a496b8aa8";
export const url=new URL("../icons/cloud-fog-fill.svg?v=e5fa555f6d68a04819ea5503cd10985f258d165b23c1fe01ea67405c7fe5da91",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
