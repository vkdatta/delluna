export const name="battery-vertical-empty-duotone";
export const id="dl_5f88704e29a64ca4bf7e";
export const url=new URL("../icons/battery-vertical-empty-duotone.svg?v=072e5816e5638c1f8eae74640daedd4e630f599e703b173a07b4c9349870c436",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
