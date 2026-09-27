export const name="recycle-light";
export const id="dl_a221c619eaee4941bd19";
export const url=new URL("../icons/recycle-light.svg?v=3f165f01206dd33b7d03d395cce3cc0bcd13740f07b64c0eed4d8b44ca7b44b6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
