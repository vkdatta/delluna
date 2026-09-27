export const name="share_windows-fill";
export const id="dl_1877510c7d712c647260";
export const url=new URL("../icons/share_windows-fill.svg?v=8688101804aa43dc982e61197afce30b6b7f72c18d5fa13e650740388ae5b771",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
