export const name="person_text-fill";
export const id="dl_913dd2de4c7d8e8ba828";
export const url=new URL("../icons/person_text-fill.svg?v=f5889d23e9af2f7b4bf63b31aa36be11b8b9366ca7a7a5984e24eb81de169ff1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
