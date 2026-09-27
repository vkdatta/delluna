export const name="coffee-thin";
export const id="dl_e48c35d5161c456394b9";
export const url=new URL("../icons/coffee-thin.svg?v=d1617104fd0f5df67b395fe2ec8481a6e2341204c93d248033b70c8cd5e1207b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
