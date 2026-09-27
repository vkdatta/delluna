export const name="airplanemode_inactive-fill";
export const id="dl_731af0beb487eccd8a76";
export const url=new URL("../icons/airplanemode_inactive-fill.svg?v=de2cc0014bf4067e10e36202c49515a70bd44299e7fd84318db09b03beb5c6b5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
