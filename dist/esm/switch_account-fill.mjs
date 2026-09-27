export const name="switch_account-fill";
export const id="dl_6a60f71faa7cdc254496";
export const url=new URL("../icons/switch_account-fill.svg?v=e524f96e8bf8f0dbd2baa01da35e54f51c5dadc51001fec6c5e0114c4e159d90",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
