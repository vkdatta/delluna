export const name="door_back";
export const id="dl_0ac4757c4a594621adfc";
export const url=new URL("../icons/door_back.svg?v=cfaef9894bb372871904ddb2c25d9626e422a205448a53fd925fea2859fd8eee",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
