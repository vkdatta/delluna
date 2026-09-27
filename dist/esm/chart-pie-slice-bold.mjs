export const name="chart-pie-slice-bold";
export const id="dl_71b0565f006e43998a95";
export const url=new URL("../icons/chart-pie-slice-bold.svg?v=e35c7a62f5d161932d0700729f6a6d7110e006d5b10d89cb622593fd134997f7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
