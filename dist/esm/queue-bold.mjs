export const name="queue-bold";
export const id="dl_c886e19801a447c5bc7b";
export const url=new URL("../icons/queue-bold.svg?v=7bef4535f3518f9d456717af35e4212284ad8f99848b7c1e87b6b1002bef9650",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
