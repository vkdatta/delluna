export const name="lucid_1-cat";
export const id="dl_257fba1e0a0d4411b5fa";
export const url=new URL("../icons/lucid_1-cat.svg?v=d75aaef5a6c153218eefd3f63c37d740860414ffae320fc7653e8eb856603167",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
