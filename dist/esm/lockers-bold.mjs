export const name="lockers-bold";
export const id="dl_95a6a3a0dc61471284c8";
export const url=new URL("../icons/lockers-bold.svg?v=b506a857bc7f4858db9f7014061e029093ed4048dcdcf0ecaa1024b219a14719",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
