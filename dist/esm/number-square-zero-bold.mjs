export const name="number-square-zero-bold";
export const id="dl_359b08f33ca148258d8a";
export const url=new URL("../icons/number-square-zero-bold.svg?v=0ad5af8c71489b59f9b5baf67fd8d0c2fcedce7133faca2419d2c1da33dcd2a3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
