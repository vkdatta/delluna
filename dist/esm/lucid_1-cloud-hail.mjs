export const name="lucid_1-cloud-hail";
export const id="dl_6851e679f0804bccb1bd";
export const url=new URL("../icons/lucid_1-cloud-hail.svg?v=9ea35923b179521a728d65a6f9496dcfaea21307156f5e2e592e8ecfeb505175",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
