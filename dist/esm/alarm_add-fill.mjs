export const name="alarm_add-fill";
export const id="dl_b992ace81baeedb9f39c";
export const url=new URL("../icons/alarm_add-fill.svg?v=c976a6f44675e54b5e357a275023e59287ec983240a78960c015559ab056a766",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
