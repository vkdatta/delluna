export const name="id_card";
export const id="dl_8b3c9a8a977abed1d4f0";
export const url=new URL("../icons/id_card.svg?v=369fee4e8c2e37aefbc14010a8511719c90ff6855e0c121c4642b93132417031",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
