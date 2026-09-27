export const name="dashboard_2_edit";
export const id="dl_294756572c8d8301502b";
export const url=new URL("../icons/dashboard_2_edit.svg?v=e48f57f5d6d6367075404e39199345edcfcd733468632c9202a14731a0d45661",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
