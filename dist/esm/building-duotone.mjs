export const name="building-duotone";
export const id="dl_bdbab3f0ea8444afb471";
export const url=new URL("../icons/building-duotone.svg?v=78b53d7881fbc0eb1513dc18de119c49a8a9a09c1608431c273d5c36d82a281c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
