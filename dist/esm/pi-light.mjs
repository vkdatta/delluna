export const name="pi-light";
export const id="dl_49e8f48661d14570b497";
export const url=new URL("../icons/pi-light.svg?v=37fa4d9f14a69993e9341e9d36219f9d3d11ba2b6f2dd55b2c26344afd49dc62",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
