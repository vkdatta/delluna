export const name="arrow-line-left-fill";
export const id="dl_efa9cc3ec7024f1d82b9";
export const url=new URL("../icons/arrow-line-left-fill.svg?v=a6b7b0e89d8f8f90bc31ef53dae26cbaad21835a5b915506b20ba7a3fd210ac6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
