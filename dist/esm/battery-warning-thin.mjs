export const name="battery-warning-thin";
export const id="dl_aa619346ddaa4b988376";
export const url=new URL("../icons/battery-warning-thin.svg?v=0e665584abf73686d50623db547ad74c459546ceb252cd4d3e093292c9c69873",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
