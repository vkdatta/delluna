export const name="lock-light";
export const id="dl_534bb4c24c7c483c9b88";
export const url=new URL("../icons/lock-light.svg?v=ebcb8f5ce9f79f5105d802d77bed46e3153a7e5f640aa9c901f9889d841b3c5f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
