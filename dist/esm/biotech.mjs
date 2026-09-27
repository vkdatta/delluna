export const name="biotech";
export const id="dl_af192d130601697f7705";
export const url=new URL("../icons/biotech.svg?v=b340f8e2a4b20d86e88e71c8ce98624f96e6573e0b7cb5ef3c8e5642d66f231c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
