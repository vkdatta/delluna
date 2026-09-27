export const name="wifi-low-duotone";
export const id="dl_5edffc036e309ad66445";
export const url=new URL("../icons/wifi-low-duotone.svg?v=fe7716c4bc22b0640fd6620db5ac2c29170b6101c88e2cd71902a52e26d5e0d5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
