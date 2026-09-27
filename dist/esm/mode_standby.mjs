export const name="mode_standby";
export const id="dl_84e3e0bbc201470cd7b3";
export const url=new URL("../icons/mode_standby.svg?v=480a143ca96d88318ef7835a6c46d8b19b37234bedaf840d38243313df651890",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
