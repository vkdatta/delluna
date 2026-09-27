export const name="infinity";
export const id="dl_24cb7c57dc7a48e9a6d5";
export const url=new URL("../icons/infinity.svg?v=7f1d94eea7bea287665646494bef5bcfef9bf498ef8cde2734d92e732d5de60d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
