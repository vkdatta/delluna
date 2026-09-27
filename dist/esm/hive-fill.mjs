export const name="hive-fill";
export const id="dl_4518951c0e45450c3ee4";
export const url=new URL("../icons/hive-fill.svg?v=7b03e5de8dcb79bff80624f5f9bcf1fe0637d423a89a617876b1fec2d754c5e3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
