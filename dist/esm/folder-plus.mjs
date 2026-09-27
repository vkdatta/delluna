export const name="folder-plus";
export const id="dl_06fb9c3d67db4139aeb2";
export const url=new URL("../icons/folder-plus.svg?v=388f88abae789273083789b6a99863b7ce404c361433b981c6309468f7344309",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
