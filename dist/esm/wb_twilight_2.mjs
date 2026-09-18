export const name="wb_twilight_2";
export const id="dl_2572717fa21440d08bcc";
export const url=new URL("../icons/wb_twilight_2.svg?v=abfc8d8fd5a4c29a548beacfb07ebb94f3e08aea6472827d6a3fdfc54dcd031a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
