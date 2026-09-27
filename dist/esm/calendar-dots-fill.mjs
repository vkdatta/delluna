export const name="calendar-dots-fill";
export const id="dl_1a561fcea7864a18b3e0";
export const url=new URL("../icons/calendar-dots-fill.svg?v=1cbd65e3e95de52c92efa7afc17ff140ef1f401603540e755279523a2ffa5af6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
