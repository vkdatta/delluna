export const name="number-circle-one-duotone";
export const id="dl_c137ddfab7264fbb91ba";
export const url=new URL("../icons/number-circle-one-duotone.svg?v=b579d83d6e41d8c8cf9f897bb998e254783ce641660077dff45d1189d5c370ef",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
