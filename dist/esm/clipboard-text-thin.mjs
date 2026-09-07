export const name="clipboard-text-thin";
export const id="dl_4031d8dfdb954832852e";
export const url=new URL("../icons/clipboard-text-thin.svg?v=8c3762e8d0d32860a198e608c50aadffc1c20b1367def48d1cf69761fa69c0b1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
