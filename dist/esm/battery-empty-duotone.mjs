export const name="battery-empty-duotone";
export const id="dl_b4a9974ef67d424aa672";
export const url=new URL("../icons/battery-empty-duotone.svg?v=13d7f419a85d821f5d378700c5c4ff6f02d5a4269102f515b08a01fbcedf1507",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
