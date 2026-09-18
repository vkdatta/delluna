export const name="styler-fill";
export const id="dl_821f6754f493496bb886";
export const url=new URL("../icons/S/styler-fill.svg?v=b879bafe9b8d995e457799c1de057f9d9547795e423e38f74a3b82b7a0400ac9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
