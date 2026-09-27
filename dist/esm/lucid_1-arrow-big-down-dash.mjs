export const name="lucid_1-arrow-big-down-dash";
export const id="dl_df9f75c1f8f54a79b8a5";
export const url=new URL("../icons/lucid_1-arrow-big-down-dash.svg?v=5f45facda62065ee52f3b0fc80300254d803f81e106379cf606207a20af1d6fb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
