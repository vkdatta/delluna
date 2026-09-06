export const name="queue-bold";
export const id="dl_c886e19801a447c5bc7b";
export const url=new URL("../icons/queue-bold.svg?v=ac90de6aa6a01d05126e675e7adf04f22e0076539e251baee817797aae02e6bc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
