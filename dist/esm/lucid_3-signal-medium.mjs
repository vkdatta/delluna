export const name="lucid_3-signal-medium";
export const id="dl_2da688009cf64004b400";
export const url=new URL("../icons/lucid_3-signal-medium.svg?v=9ab07ae2cdc5401ef144ff135b736aadbc9748b5abaf0f6e3b6b20725ac9cbf7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
