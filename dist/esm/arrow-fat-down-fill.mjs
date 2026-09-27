export const name="arrow-fat-down-fill";
export const id="dl_a0403ce18b6145a0bd6e";
export const url=new URL("../icons/arrow-fat-down-fill.svg?v=3d014b5b506eb06949170cdae63f01d4070edba38524d6a2e33ae59ed9348a3c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
