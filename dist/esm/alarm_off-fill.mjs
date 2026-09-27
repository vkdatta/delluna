export const name="alarm_off-fill";
export const id="dl_3c6f293c988f01b23e2a";
export const url=new URL("../icons/alarm_off-fill.svg?v=9457838207e1c7625e716951f4b7955355b8bba3da1149ecccba349e71023f71",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
