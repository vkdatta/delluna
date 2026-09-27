export const name="arrow-bend-up-right-duotone";
export const id="dl_b5173a8e464746e8883f";
export const url=new URL("../icons/arrow-bend-up-right-duotone.svg?v=140d9f0e45c309436cfa2c22f782e314c82d874331377dc356e115a8a9a171a8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
