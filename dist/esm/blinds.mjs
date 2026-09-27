export const name="blinds";
export const id="dl_2b9eeff0648029b5d0bd";
export const url=new URL("../icons/blinds.svg?v=572c8f16d7a191ef545ed243740e0a10e99b27b7410e6433a0f331d3c3458de1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
