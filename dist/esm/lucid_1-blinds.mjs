export const name="lucid_1-blinds";
export const id="dl_16ce83cc18a1466e9917";
export const url=new URL("../icons/lucid_1-blinds.svg?v=00376b45446c28622d560bf87df7eada3285298e5c711f9ebc7b15f813b9c8e3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
