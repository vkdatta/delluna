export const name="cloud-sun-thin";
export const id="dl_8123491b970844c096d3";
export const url=new URL("../icons/cloud-sun-thin.svg?v=56af9a3794f3987d3555a91c5d017851d44fe57bfd6a9e6e5e097b44dc4a1ce2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
