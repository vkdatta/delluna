export const name="chair_counter-fill";
export const id="dl_79a2371e819446d8a99a";
export const url=new URL("../icons/chair_counter-fill.svg?v=32d408d54d633b6177a4570196ee345e334a10dcacaaf20eb820d91e45383045",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
