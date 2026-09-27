export const name="notification-duotone";
export const id="dl_97a45a3b76ad4f64a869";
export const url=new URL("../icons/notification-duotone.svg?v=080eda98cd95538391eebc6da65661dcb2c1d265a44fd6fdae31e93f4e8d818d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
