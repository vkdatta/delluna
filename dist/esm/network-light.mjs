export const name="network-light";
export const id="dl_d0bb8c65b8704202957b";
export const url=new URL("../icons/network-light.svg?v=b14c6615a68ed748e3c2ba80cea73f87da4d5cda084126a31fbb3689af0bf4e1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
