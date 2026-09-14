export const name="all_inbox";
export const id="dl_daa020e460014966a02e";
export const url=new URL("../icons/A/all_inbox.svg?v=c0813d2c35c14ecb9a4cd1e74b0e89ad94536a3e4e7eeefef4af5c8252c6c761",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
