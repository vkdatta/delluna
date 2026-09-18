export const name="alarm_pause";
export const id="dl_159966a3521f444ea549";
export const url=new URL("../icons/alarm_pause.svg?v=3af4b3a60a648d3133488c8847ffe2490ccf48ea7a938447e30c647fbded84b2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
