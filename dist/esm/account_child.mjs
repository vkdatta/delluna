export const name="account_child";
export const id="dl_51c802d14e9cbedeef88";
export const url=new URL("../icons/account_child.svg?v=2a39c2dd7d8a1aab7029f7bb7a10c260325707eea777ec8338fc0cb65bfe1e1f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
