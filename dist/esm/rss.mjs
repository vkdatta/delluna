export const name="rss";
export const id="dl_4b495c683c244b9bafc2";
export const url=new URL("../icons/rss.svg?v=468b597bf8c730bcd63d7ebdd53b212b2fbb4950fbcac5694a57fd31d3d3cb82",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
