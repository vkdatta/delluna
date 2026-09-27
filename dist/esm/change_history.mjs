export const name="change_history";
export const id="dl_5a2c28e485381dcb9bc8";
export const url=new URL("../icons/change_history.svg?v=24e035dcc43bb2db68c0cb1083a71c34839493338e5fc438a59e8ec3f3810c36",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
