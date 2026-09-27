export const name="oncology";
export const id="dl_2ebebe3fd627d4c24771";
export const url=new URL("../icons/oncology.svg?v=f397b386eba6bd90e78e0ab9205298da1c7309dd679e9ad04903bc5e49ef638a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
