export const name="cell-signal-medium";
export const id="dl_9ca80611b3024888a8ba";
export const url=new URL("../icons/cell-signal-medium.svg?v=fd23f81478ffeda185852c68293ae8f284c81471cdfda7eb12723ca88ad19a70",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
