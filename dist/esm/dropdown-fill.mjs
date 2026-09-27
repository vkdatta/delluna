export const name="dropdown-fill";
export const id="dl_6665f5f33dce662d7e58";
export const url=new URL("../icons/dropdown-fill.svg?v=9a8eb761ad8a21e01a47e76872b329b5f3e6e25dee6299d2f581a462b05fc382",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
