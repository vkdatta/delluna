export const name="lucid_3-sandwich";
export const id="dl_be6a06c6657143648358";
export const url=new URL("../icons/lucid_3-sandwich.svg?v=903406fcb3feb25d1022b6ad3c38682be588ccf49c5e58f42e7eaf1a1e1c4b89",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
