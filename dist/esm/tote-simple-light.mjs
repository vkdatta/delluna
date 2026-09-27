export const name="tote-simple-light";
export const id="dl_bfe524b1167758864bd1";
export const url=new URL("../icons/tote-simple-light.svg?v=2f4001fd7528d77b75f8ec8da58f941ff8b663b9cc068a3155e6508916843c60",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
