export const name="clock-countdown-bold";
export const id="dl_87d401be6b5d497d8332";
export const url=new URL("../icons/clock-countdown-bold.svg?v=16a65524a36afdb995642418807cb60929c402a11183740c2328a47bdc870ad0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
