export const name="tray-arrow-down-thin";
export const id="dl_fd73e1f96e00e90e7918";
export const url=new URL("../icons/tray-arrow-down-thin.svg?v=dff7c8acda72902c8e43249f3a940d54ca3d74d5280979f7082ae259607607d0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
