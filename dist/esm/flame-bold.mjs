export const name="flame-bold";
export const id="dl_cf29fed74af0473c9191";
export const url=new URL("../icons/flame-bold.svg?v=7ad2d5c6098959aae5fc6491645a79e59f84cffe94ef646458af151dd633aa93",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
