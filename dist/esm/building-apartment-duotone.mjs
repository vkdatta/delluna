export const name="building-apartment-duotone";
export const id="dl_f17670e1285344e1b3de";
export const url=new URL("../icons/building-apartment-duotone.svg?v=6afc12cede77a4848b40cbcc756026439e71ba7ea7942671bfaa7c1abfc2b33b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
