export const name="dots-three-light";
export const id="dl_691b4e0530e844b48a1a";
export const url=new URL("../icons/dots-three-light.svg?v=4c4b31da8497653d02d0ce26867c78d35973e2e63c6fd34111d836f955e847ad",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
