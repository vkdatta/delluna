export const name="edit_notifications";
export const id="dl_ce5a527cfd3b5eae7d8b";
export const url=new URL("../icons/edit_notifications.svg?v=cee6939c85cd54eab60eda16804ad1f63f61bf858df752add9dda05ff8a7ce4c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
