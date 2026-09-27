export const name="hand-grabbing-light";
export const id="dl_d84674f16d5d43a0a9f9";
export const url=new URL("../icons/hand-grabbing-light.svg?v=bcc4b47afc155fd77cc68957309b963fe8a26aec85d13de818b12790c8685d5b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
