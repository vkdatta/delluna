export const name="manage_history-fill";
export const id="dl_1ad59417910b200e6062";
export const url=new URL("../icons/manage_history-fill.svg?v=5fa9f0f3c793b6f409a5ad72ede840f135961229de48887a3db57e1665f9f280",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
