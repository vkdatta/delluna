export const name="loyalty-fill";
export const id="dl_e374f0789560aca8f024";
export const url=new URL("../icons/loyalty-fill.svg?v=ff2b7f19c7308f50ccaff0a1f4a723b8ff9baf114c883e7156a3e6a4269c27da",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
