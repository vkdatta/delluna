export const name="watch_alert";
export const id="dl_3b58093e7538b2acda26";
export const url=new URL("../icons/watch_alert.svg?v=ba2c241929ef31083bb99a5dd70724053989faaeedd9e635d5b1e9b48338ecb7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
