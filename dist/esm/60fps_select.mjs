export const name="60fps_select";
export const id="dl_fd47bee8b4279385d038";
export const url=new URL("../icons/60fps_select.svg?v=9b911d5c977410f7ba04deb0a870aa23a345316a81330dc902d5ad8f03d61f6b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
