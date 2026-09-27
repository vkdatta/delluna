export const name="hand-swipe-right-light";
export const id="dl_9f485025cc7d445d8e58";
export const url=new URL("../icons/hand-swipe-right-light.svg?v=31d8a8a997e8e16cbd37445bd971cc65e47051f59e55efd729e55182d8333687",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
