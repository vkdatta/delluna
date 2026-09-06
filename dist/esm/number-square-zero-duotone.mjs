export const name="number-square-zero-duotone";
export const id="dl_fa7397f26b2a403eb74d";
export const url=new URL("../icons/number-square-zero-duotone.svg?v=cbe19f812ab20cb13f25df8cdd38e0053fc42f9316c6a193d165b6b56d08bf63",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
