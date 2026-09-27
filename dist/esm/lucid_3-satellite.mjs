export const name="lucid_3-satellite";
export const id="dl_345a0f5d1c774463bd00";
export const url=new URL("../icons/lucid_3-satellite.svg?v=d4c148427926a943edc50e20e90f69112fd98f5bc0c47703259ccab8a4f74488",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
