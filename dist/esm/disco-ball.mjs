export const name="disco-ball";
export const id="dl_d59f536c3a5d4263bd93";
export const url=new URL("../icons/disco-ball.svg?v=4907947ae1dca5ef096f89f71ae907fac717fff5402bcaeadd9adc4fb6f7d8af",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
