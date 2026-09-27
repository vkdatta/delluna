export const name="lucid_1-circle";
export const id="dl_7f96e070089741039015";
export const url=new URL("../icons/lucid_1-circle.svg?v=58b297888a9b66831ca35d679575b30aae00f10486633c4791e49772193ccbb9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
