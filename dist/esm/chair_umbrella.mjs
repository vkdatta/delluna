export const name="chair_umbrella";
export const id="dl_1297614c4f8b5e729e54";
export const url=new URL("../icons/chair_umbrella.svg?v=5889a5f55bdea74ddf93223202c7e4b82e0b89da592e70b48a929d0d22d16759",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
