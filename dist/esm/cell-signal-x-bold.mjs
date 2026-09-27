export const name="cell-signal-x-bold";
export const id="dl_cebd5ed84c444a25813e";
export const url=new URL("../icons/cell-signal-x-bold.svg?v=865ec6320e6847e133b43211cb111ffd1c206b80b0a72b0e39e82d8c57bb748a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
