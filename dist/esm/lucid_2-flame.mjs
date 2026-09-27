export const name="lucid_2-flame";
export const id="dl_c365ddb61260427a8766";
export const url=new URL("../icons/lucid_2-flame.svg?v=105333d06f81e232ab9e164d47eebb934d88918e77eea52b31f80450920af38e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
