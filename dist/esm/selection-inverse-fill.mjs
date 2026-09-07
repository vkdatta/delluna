export const name="selection-inverse-fill";
export const id="dl_f29251ea418840feb8d5";
export const url=new URL("../icons/S/selection-inverse-fill.svg?v=e1edd43efd1ff4be9137d71ee498e61efafbd5c528398523530ddb90563f8a46",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
