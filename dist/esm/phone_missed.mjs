export const name="phone_missed";
export const id="dl_d41f74c8b48f54e68aed";
export const url=new URL("../icons/phone_missed.svg?v=0fcf97fce1a1de3e6e053fd74c04144f27579e3e7e18c40eb636daa6e7329d3f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
