export const name="skull-light";
export const id="dl_76aa8eada5d940bf9b5c";
export const url=new URL("../icons/S/skull-light.svg?v=0b2881f47f363a9b8ad1aa1a78597749efe72f29d39007c1cbf25c41dd976b27",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
