export const name="femur";
export const id="dl_587b4febc1086eb85392";
export const url=new URL("../icons/femur.svg?v=e29e355078f9611408a649800b52690a1038f9b800ee54061631432b7bbca9f1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
