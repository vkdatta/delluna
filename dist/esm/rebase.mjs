export const name="rebase";
export const id="dl_46a900ed169812f7efa0";
export const url=new URL("../icons/rebase.svg?v=0460f9dabde97e098f6ec18eac65cfc7c69858505314fc6f545fedd40531996f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
