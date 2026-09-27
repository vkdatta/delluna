export const name="exclamation-mark-thin";
export const id="dl_0637c17bcbb94a9a8820";
export const url=new URL("../icons/exclamation-mark-thin.svg?v=e306e5ae597af962020d90dce79142e70f5c0d3236ac5cd0845638c7ef8a8479",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
