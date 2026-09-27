export const name="dine_in";
export const id="dl_5e2077b41f812ebfbf40";
export const url=new URL("../icons/dine_in.svg?v=e8f9342d4fdb1d164d1dbcc8e731ff827089e2a7a3921898c0ba87c02a377d41",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
