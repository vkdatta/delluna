export const name="cable-car-light";
export const id="dl_2c10030f045f4ce9b53b";
export const url=new URL("../icons/cable-car-light.svg?v=6e97fdc2a7c8077318b7318fe5d9877de6c8c1406a63397b29500a3b2fef20f3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
