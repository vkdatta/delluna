export const name="wifi-x-bold";
export const id="dl_1646603311fd89fdca67";
export const url=new URL("../icons/wifi-x-bold.svg?v=5e4deeed66acd8b0f63dc8d127d5ab432af2af8830fe58c0e5f355eca31ba8d9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
