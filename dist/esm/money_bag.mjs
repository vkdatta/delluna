export const name="money_bag";
export const id="dl_9c2a7e951fd2e4a5b4c6";
export const url=new URL("../icons/money_bag.svg?v=f8673bcb6bfba1fe8b90521b52bae81dea75c023b6ba72adbfb80e83dcf4f32f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
