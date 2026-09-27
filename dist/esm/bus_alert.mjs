export const name="bus_alert";
export const id="dl_4652f6f7e87bab7c2b25";
export const url=new URL("../icons/bus_alert.svg?v=78a4aab7ad5ccb6ed7d274b72b858ddc94b4e7b4aee5d3c2cea2a0903f53ad0a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
