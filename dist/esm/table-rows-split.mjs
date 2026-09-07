export const name="table-rows-split";
export const id="dl_8e9f36a630ae4b15a0e7";
export const url=new URL("../icons/table-rows-split.svg?v=24cdae5133a36374d1319cf636d75671fb12428821008e3e1e747a23149d47f5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
