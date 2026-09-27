export const name="person_add_disabled-fill";
export const id="dl_ed979c53ddb5f7db8d03";
export const url=new URL("../icons/person_add_disabled-fill.svg?v=51d417800cab91ac04e609c99a25b9aa6f8f45f8bdc5fadd3b6dfe737da42654",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
