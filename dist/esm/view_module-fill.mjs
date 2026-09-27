export const name="view_module-fill";
export const id="dl_db8eb18d901594d02a7d";
export const url=new URL("../icons/view_module-fill.svg?v=4087b52731f74e5c4ba840bc659b82361d78b5bfa62e1dcdfd700bef9722bacf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
