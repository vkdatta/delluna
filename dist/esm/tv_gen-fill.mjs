export const name="tv_gen-fill";
export const id="dl_62e90f3db27745fe81ba";
export const url=new URL("../icons/tv_gen-fill.svg?v=c86260c5d8d92c7df55b5af9fa08498800c3b7e85b2f3ea981c79bce4c2c07e2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
