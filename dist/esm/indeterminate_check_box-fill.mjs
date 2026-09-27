export const name="indeterminate_check_box-fill";
export const id="dl_b6f003b9af4de78f6f21";
export const url=new URL("../icons/indeterminate_check_box-fill.svg?v=5e6de8a750d888df070b88c8d0de6bb7d4e4583ddc24f5fefd26096d291cd7b0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
