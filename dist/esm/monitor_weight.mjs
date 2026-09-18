export const name="monitor_weight";
export const id="dl_3d888945ce99442cb3a7";
export const url=new URL("../icons/monitor_weight.svg?v=787fe50c60161c4f7fda55415932b45bbacf7d9d7496b24dcd80eadf5ce93bac",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
