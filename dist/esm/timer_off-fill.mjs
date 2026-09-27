export const name="timer_off-fill";
export const id="dl_4b54583ad66ec87d1dc5";
export const url=new URL("../icons/timer_off-fill.svg?v=b91bc52eba5797f99854c65e0264d2ed51f9b4d836df57891f04c6cfb5b5af4a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
