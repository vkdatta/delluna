export const name="cell-signal-x-bold";
export const id="dl_cebd5ed84c444a25813e";
export const url=new URL("../icons/cell-signal-x-bold.svg?v=08d2bcff1c61e83a4ffae78bce50ef5b9a4a143d62a62c89eaf8651bc4d514bf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
