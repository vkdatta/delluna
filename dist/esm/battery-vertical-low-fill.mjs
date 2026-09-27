export const name="battery-vertical-low-fill";
export const id="dl_ccad6722049d42b7a3ba";
export const url=new URL("../icons/battery-vertical-low-fill.svg?v=914ebde425e164d90bdf98f5e05ee774d52b63a100832f3a49d400dc951ab9d4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
