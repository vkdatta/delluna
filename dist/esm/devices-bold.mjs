export const name="devices-bold";
export const id="dl_4079742735a642f685fc";
export const url=new URL("../icons/devices-bold.svg?v=b7937f9fd9de3d3903721b84aaa7857e620f1a73492e687ef97724e4df103e5b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
