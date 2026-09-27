export const name="handbag-duotone";
export const id="dl_fc5e98617c6b4ff3b41d";
export const url=new URL("../icons/handbag-duotone.svg?v=20d87cb47b63211cedeb859000a302df47aae56d40ee602fa794a975d6a20dba",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
