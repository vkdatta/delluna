export const name="rug-light";
export const id="dl_54e594140a244a4c94c4";
export const url=new URL("../icons/rug-light.svg?v=a4df229567f79b060254b20bc59ab5e58d2c4572546bdc4cd8b074325a0992b1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
