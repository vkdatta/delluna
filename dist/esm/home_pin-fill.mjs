export const name="home_pin-fill";
export const id="dl_3002f315bc16421b9bf5";
export const url=new URL("../icons/H/home_pin-fill.svg?v=2086ab9b2c609cda56130c0af3568176330bc688b05cf237099b58fa6160bbd9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
