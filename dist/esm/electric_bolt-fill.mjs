export const name="electric_bolt-fill";
export const id="dl_768e677482dd7f2bcaa2";
export const url=new URL("../icons/electric_bolt-fill.svg?v=8d9b9dcbb0d2e0ba596271e3d5f3e36932897be7db7f2782e248fa6f7a7ad986",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
