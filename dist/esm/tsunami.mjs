export const name="tsunami";
export const id="dl_27288f783031201ccaf2";
export const url=new URL("../icons/tsunami.svg?v=18a213c43c231a630fb5fec706aff3f4117a1be6665b57f7dde6c2b3a225144e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
