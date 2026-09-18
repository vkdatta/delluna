export const name="price_check-fill";
export const id="dl_be03d98009ad4176bb48";
export const url=new URL("../icons/P/price_check-fill.svg?v=c0201ab394e548075004c5cb53bd6c192eaa80566fcf321cc603c7ad8fe60044",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
