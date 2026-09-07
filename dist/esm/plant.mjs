export const name="plant";
export const id="dl_dbf69a59ee004f0e859a";
export const url=new URL("../icons/plant.svg?v=1201f75dac2090de7327228c7413471488d9ecf70ccf438801f1f14796cf4eaa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
