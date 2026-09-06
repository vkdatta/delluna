export const name="city-thin";
export const id="dl_148bac173f114714bf62";
export const url=new URL("../icons/city-thin.svg?v=4a4ea8643cffbf1c73d5ac18ecf990e4f3a51932072d64ff63e2cd5377af59e8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
