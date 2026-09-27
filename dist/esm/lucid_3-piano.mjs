export const name="lucid_3-piano";
export const id="dl_fee7b600f8f346abaafa";
export const url=new URL("../icons/lucid_3-piano.svg?v=dd967d6cd342ded9856940ef8662ecb3053327119662d4cb923306d6da595059",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
