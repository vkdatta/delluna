export const name="stop_screen_share-fill";
export const id="dl_d5a3af13fe6b14a495e4";
export const url=new URL("../icons/stop_screen_share-fill.svg?v=6e41db1fcad4a99d8ce611a7cab43126ce8ec06188aaaa354982cab063a8f5c6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
