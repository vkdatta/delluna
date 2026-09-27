export const name="request_quote";
export const id="dl_ad98770a5d0f5501546f";
export const url=new URL("../icons/request_quote.svg?v=4d12c017a5f86205f1ebe76baaa847dc30021c387eaff1eca96e2f8a1f38e5a6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
