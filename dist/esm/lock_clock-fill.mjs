export const name="lock_clock-fill";
export const id="dl_646de67d6cdbdb5ee3c9";
export const url=new URL("../icons/lock_clock-fill.svg?v=e0ec2e9d272fd4ff3e25ae59ccc8e58e7abb207dc082b9843391a28780b1b2e6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
