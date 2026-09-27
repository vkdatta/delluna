export const name="gynecology-fill";
export const id="dl_662e8ab800272a58f9bd";
export const url=new URL("../icons/gynecology-fill.svg?v=c301e055c70a84ba13b5de032e4028ff865a77aecab040140573b96700a1e94e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
