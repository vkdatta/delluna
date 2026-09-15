export const name="csv";
export const id="dl_7add80d770e8490b9b84";
export const url=new URL("../icons/C/csv.svg?v=d6902039520444f68170b60838b795c30cbcb6507feeb33f907b739c242c5703",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
