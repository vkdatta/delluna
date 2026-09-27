export const name="car_repair";
export const id="dl_bdd595e60fcf8bd23bcb";
export const url=new URL("../icons/car_repair.svg?v=aad8370c4dcbf27d4ca10cbff5ec68b988eb12d0765ba6af00d34e2a0f89ef1a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
