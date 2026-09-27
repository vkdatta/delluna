export const name="star_rate";
export const id="dl_02f376521fa82306ff67";
export const url=new URL("../icons/star_rate.svg?v=9e0b739ecd0fa78f7f9aa50220c9db00954be075ebc8d0e4ff1db3692aecd7d9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
