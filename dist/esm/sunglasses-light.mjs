export const name="sunglasses-light";
export const id="dl_ecaedc9a91c34149966e";
export const url=new URL("../icons/S/sunglasses-light.svg?v=e939fd2c7ad4254e8e8bc6f78f2e3cba6baf6f4bdf7b2da892a3f12fc7c7d18b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
