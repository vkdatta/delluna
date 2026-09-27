export const name="border_clear-fill";
export const id="dl_3227199a17507b606ab6";
export const url=new URL("../icons/border_clear-fill.svg?v=9e9712a0fd979c2dbd5447924f553fd9573ace72d48a57ae91a20fd6ee9e5f5a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
