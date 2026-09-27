export const name="sell_cloud";
export const id="dl_6224e3aebdc744759cef";
export const url=new URL("../icons/sell_cloud.svg?v=dcf301b91ce3dc2f6a06ed9adcace14ab85da258a3181987e8f809f88b864fda",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
