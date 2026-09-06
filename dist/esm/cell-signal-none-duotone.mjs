export const name="cell-signal-none-duotone";
export const id="dl_1626fd0483364d1fb374";
export const url=new URL("../icons/cell-signal-none-duotone.svg?v=9e2c2d201d120e6f726f67aca51b1a7ae04042f240999ce0e7dcf80ad7127dd0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
