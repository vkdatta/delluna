export const name="money_bag";
export const id="dl_09b8d18478aeb7519354";
export const url=new URL("../icons/money_bag.svg?v=ec53b601a40b72b61704f1eac8ae411d4ae1ed55aad43fe94c5bc47151300676",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
