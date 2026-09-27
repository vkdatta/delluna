export const name="pencil-ruler-fill";
export const id="dl_40784b93aa984416a4db";
export const url=new URL("../icons/pencil-ruler-fill.svg?v=084b37d5c7f00bc05671f9e29898e5704bbdd5a28f621c572e69248b64162153",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
