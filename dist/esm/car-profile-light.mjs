export const name="car-profile-light";
export const id="dl_234fd198c9b64739ade3";
export const url=new URL("../icons/car-profile-light.svg?v=d7c8aad064053b274dbfcce322f7b3ff5a5f35d61e04e8a81e08e89007c70cd9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
