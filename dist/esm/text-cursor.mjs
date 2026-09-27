export const name="text-cursor";
export const id="dl_4228c34cc73549398999";
export const url=new URL("../icons/text-cursor.svg?v=36f220622cf0585283fa8d25bba8f3b42235a4c39bca8d4418b54fb8c291f572",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
