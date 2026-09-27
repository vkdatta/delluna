export const name="tools_power_drill";
export const id="dl_ea19baa3981bf41464d2";
export const url=new URL("../icons/tools_power_drill.svg?v=9530c4477718cdcb4d077f020510dc4a3315d9bffc4bd95a669485e2442ccc93",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
