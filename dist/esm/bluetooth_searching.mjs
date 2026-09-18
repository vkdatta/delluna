export const name="bluetooth_searching";
export const id="dl_371b6039e111493cacb4";
export const url=new URL("../icons/bluetooth_searching.svg?v=d597abca48d2191c3adaafec7121553b3939b149c4a12f0ef99261f72f007dbd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
