export const name="moped_package-fill";
export const id="dl_4e2f0e443793e56eb4a1";
export const url=new URL("../icons/moped_package-fill.svg?v=b92a8ad76ad283dace9071ea32fe33a2fd51bc0c504156012ea20b4abf842a94",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
