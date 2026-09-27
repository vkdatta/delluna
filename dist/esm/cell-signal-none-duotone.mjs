export const name="cell-signal-none-duotone";
export const id="dl_1626fd0483364d1fb374";
export const url=new URL("../icons/cell-signal-none-duotone.svg?v=09776ecaf4d55a72459c942a30592b863718865efa18e71b100e9ab8ebd75866",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
