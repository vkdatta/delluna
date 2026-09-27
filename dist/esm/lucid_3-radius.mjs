export const name="lucid_3-radius";
export const id="dl_ad55a1a92fab4a2ea7f9";
export const url=new URL("../icons/lucid_3-radius.svg?v=7cfa0414a56748611dd76bbdbcb05372b81d81347106e526ae2ba330bb779626",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
