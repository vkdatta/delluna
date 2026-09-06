export const name="bone-bold";
export const id="dl_6bc186d81ab447df9759";
export const url=new URL("../icons/bone-bold.svg?v=1aa767e5c2de403b5d3a215ba89f6f69fc2fe7eb55e283494606eba082cba155",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
