export const name="swipe_right-fill";
export const id="dl_fd201e599a804b70ab95";
export const url=new URL("../icons/swipe_right-fill.svg?v=c29b210ae369302cd0200b73dc85508b0caab8637156a1715a3c8aff7901a593",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
