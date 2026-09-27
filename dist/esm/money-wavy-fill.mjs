export const name="money-wavy-fill";
export const id="dl_d0e3c34cdc8b41f8b0e1";
export const url=new URL("../icons/money-wavy-fill.svg?v=235882363d39fd3c61c566b6d284a57b946a045b3c7b9ed389100b641e400794",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
