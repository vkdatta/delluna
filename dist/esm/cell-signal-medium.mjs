export const name="cell-signal-medium";
export const id="dl_9ca80611b3024888a8ba";
export const url=new URL("../icons/cell-signal-medium.svg?v=04c669dec4a18dff0d930a0bd23d5b895482111c0be780d65fbc782e56bf8afb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
