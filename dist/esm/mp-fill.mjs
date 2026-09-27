export const name="mp-fill";
export const id="dl_52ef102098b03e8a293f";
export const url=new URL("../icons/mp-fill.svg?v=3e47524073f214a6eef2bd005bff60a6dc604f2dec5b21a2b90c609f1a1b6f75",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
