export const name="swap-fill";
export const id="dl_78ac90e56a531594d040";
export const url=new URL("../icons/swap-fill.svg?v=dc43712184b4d6cc21aa439c7fd7b0128ff711dc1452e54ab43afd8102f9d4fb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
