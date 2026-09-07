export const name="wave-sawtooth-light";
export const id="dl_d2f6f7be87b94aa7b6e7";
export const url=new URL("../icons/W/wave-sawtooth-light.svg?v=ff515b3730c4f36bff0b2ac871b81bffa6600bed51095ae43ba340c8afed356c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
