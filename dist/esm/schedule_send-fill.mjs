export const name="schedule_send-fill";
export const id="dl_a5a18672b41a49e5a724";
export const url=new URL("../icons/schedule_send-fill.svg?v=b828d90306c6611d1824725c7c8f10868e7a8e3c9baf5fe25286826f8f61ebe6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
