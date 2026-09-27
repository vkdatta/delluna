export const name="smart_card_reader";
export const id="dl_e7d6d8a3505d5ac47f36";
export const url=new URL("../icons/smart_card_reader.svg?v=66b7ec8d1f9c0732af1652c41c6fa8b87909553f570d93488c52f71a77f97c4b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
