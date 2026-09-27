export const name="print_connect-fill";
export const id="dl_eaa558a4e66f19de68de";
export const url=new URL("../icons/print_connect-fill.svg?v=c271b34bbe9d77a9b2519c76e52b930c16acc862782b96c71bcefeb28f94fdf0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
