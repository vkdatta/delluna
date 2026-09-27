export const name="ungroup-fill";
export const id="dl_ac3e5fc3b761b91be765";
export const url=new URL("../icons/ungroup-fill.svg?v=06434ed3a636b9b5620b5bebc0a5d834bcfedc592d9a1722acb4d973afeb3100",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
