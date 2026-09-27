export const name="lucid_3-message-square-dashed";
export const id="dl_5e297379eb504086a722";
export const url=new URL("../icons/lucid_3-message-square-dashed.svg?v=6ec13d7b117817b234f8af7e47ce65211b7246d79721d9982c4974a4b3a36d2e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
