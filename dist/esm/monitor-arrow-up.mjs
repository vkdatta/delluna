export const name="monitor-arrow-up";
export const id="dl_3862fcb12169469ab7e8";
export const url=new URL("../icons/monitor-arrow-up.svg?v=5c8dc0e079bbe16c710df23cc1f36d1a4013505239edf42e7e76ac694d2d7638",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
