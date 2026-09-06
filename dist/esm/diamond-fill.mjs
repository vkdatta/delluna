export const name="diamond-fill";
export const id="dl_b3720df69399457292af";
export const url=new URL("../icons/diamond-fill.svg?v=e50d5227db3ca71ba862deb7a6e60b78eb27c7780ed2e2b856c31269b63f4a68",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
