export const name="file-ini-duotone";
export const id="dl_87b7c59adc9d40c6a95b";
export const url=new URL("../icons/file-ini-duotone.svg?v=51c033c4ffc45e66a070b420030c20bf197a06a4c57e4402383a2cce529f1f3a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
