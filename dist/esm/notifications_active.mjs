export const name="notifications_active";
export const id="dl_294f644ded22219f41ba";
export const url=new URL("../icons/notifications_active.svg?v=cc4899885d808879dbf583be923708044709770902ad27d399ad520d65d07392",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
