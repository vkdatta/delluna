export const name="supervisor_account-fill";
export const id="dl_42e4b8b8e0120c17a399";
export const url=new URL("../icons/supervisor_account-fill.svg?v=e52b7ddd82aa9561fb66d8c8d0d8af9879eb404b4e61a86448cdd089f4b6fd92",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
