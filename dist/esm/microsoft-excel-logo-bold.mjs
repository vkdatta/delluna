export const name="microsoft-excel-logo-bold";
export const id="dl_47e222eb1e8740fba3b4";
export const url=new URL("../icons/microsoft-excel-logo-bold.svg?v=ce542178d77c5012bd5d4121f9b0249c1ef8dca7afb6a4693a5ba1be071d67ba",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
