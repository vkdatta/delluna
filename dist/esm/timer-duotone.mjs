export const name="timer-duotone";
export const id="dl_1d88ad08b79b60d2a598";
export const url=new URL("../icons/timer-duotone.svg?v=2aeed42df091365ebd5f22d14401079842ec7250d0ed88a7dcf30997b09db77f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
