export const name="manage_history-fill";
export const id="dl_dd992852518a4d9faeb7";
export const url=new URL("../icons/manage_history-fill.svg?v=9f62a9f2834691f17388bbec89f08086cbeab03ae20114bd02fb01272b4fd958",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
