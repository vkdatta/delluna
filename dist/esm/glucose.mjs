export const name="glucose";
export const id="dl_e802f34340caf1d65b2c";
export const url=new URL("../icons/glucose.svg?v=af3b78d9508643b91d5b00e759d0ffed405d4c3635abf27749b73a16594d6d31",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
