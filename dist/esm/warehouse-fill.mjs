export const name="warehouse-fill";
export const id="dl_e094505645b51a99d8f4";
export const url=new URL("../icons/warehouse-fill.svg?v=d68daf2b3a4cd5636012125f46d2c9bc0bfa06cbb3be48fa93448fca02ddf49d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
