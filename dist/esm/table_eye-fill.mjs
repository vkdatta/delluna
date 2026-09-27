export const name="table_eye-fill";
export const id="dl_f65b808b9633e4e8e824";
export const url=new URL("../icons/table_eye-fill.svg?v=7b968d56cfdf3a03810137b50c6ca43d357a308412e3e14361758424c75c1882",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
