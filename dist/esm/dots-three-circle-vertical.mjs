export const name="dots-three-circle-vertical";
export const id="dl_9d8df1592827405580f8";
export const url=new URL("../icons/dots-three-circle-vertical.svg?v=9d09eceab29a1283f79dc4563fa6e6b183792905a82937003bca3fe9237eb1d1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
