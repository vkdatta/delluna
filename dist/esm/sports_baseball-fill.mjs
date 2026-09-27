export const name="sports_baseball-fill";
export const id="dl_a353d5ce7171e32ee850";
export const url=new URL("../icons/sports_baseball-fill.svg?v=d42d1f373b15c2743c5af6fd116efdd61ec6bae834be42f6a2c4312fd28c05df",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
