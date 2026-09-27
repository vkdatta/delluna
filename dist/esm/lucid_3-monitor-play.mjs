export const name="lucid_3-monitor-play";
export const id="dl_ec30c1005e9f44779631";
export const url=new URL("../icons/lucid_3-monitor-play.svg?v=718ba1927077fc190200dd1f7294188bc767e1cd8720deed40ef7f6cc853f43e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
