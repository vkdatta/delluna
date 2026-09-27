export const name="cell-signal-low-duotone";
export const id="dl_b50459de27b54845adba";
export const url=new URL("../icons/cell-signal-low-duotone.svg?v=15f267c94c529ae209a7153fdb23f7517b07a9071df7573d611d9615ac782904",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
