export const name="arrows-out-line-horizontal";
export const id="dl_b6c14577a23c415fb505";
export const url=new URL("../icons/arrows-out-line-horizontal.svg?v=83feb5f0985daa14710b7e4f68ac41825d66ac390bce42510d2f544229556982",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
