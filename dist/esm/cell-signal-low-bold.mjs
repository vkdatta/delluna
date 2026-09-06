export const name="cell-signal-low-bold";
export const id="dl_5a617e59c833411c97e3";
export const url=new URL("../icons/cell-signal-low-bold.svg?v=bce3e86bee4b2378a89a1492a85ba77c0fc0d8a05774a0f4f065984f6c189908",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
