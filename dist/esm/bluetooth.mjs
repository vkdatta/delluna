export const name="bluetooth";
export const id="dl_5b434b37345f46aba29b";
export const url=new URL("../icons/bluetooth.svg?v=b7acd2d97b06217902bfe61cafd4dda5432a0823ebee5cca8a26175efab46b91",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
