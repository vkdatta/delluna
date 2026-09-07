export const name="fingerprint-light";
export const id="dl_a93c39646e9a4f06a16a";
export const url=new URL("../icons/fingerprint-light.svg?v=f2a4763c72cdf4018b0625c1430c56912e6c1bbe76ce1b199ec7e26306a707fd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
