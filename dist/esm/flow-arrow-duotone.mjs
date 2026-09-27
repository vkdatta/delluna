export const name="flow-arrow-duotone";
export const id="dl_fd6cec0295cf4c358f2a";
export const url=new URL("../icons/flow-arrow-duotone.svg?v=c80030d2735b4a4223ae04d3b7cd917dba49fec4c7e0a9f70c178fc6ef612312",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
