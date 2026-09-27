export const name="dangerous";
export const id="dl_ae694637cc9ab2eb239f";
export const url=new URL("../icons/dangerous.svg?v=53d746e0d6880bbfba9c1e393bb967ac1bf98708afe0edb90525c05c753e025d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
