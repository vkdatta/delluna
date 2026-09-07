export const name="hammer-thin";
export const id="dl_fe72af643aea47e3875e";
export const url=new URL("../icons/hammer-thin.svg?v=6cf48b7670367b9797cf9b77cc62c8a1c5e1b1d047198215d98958ceab62a76b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
