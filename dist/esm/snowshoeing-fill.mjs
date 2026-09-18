export const name="snowshoeing-fill";
export const id="dl_7ac1f8c194bb42e7b21a";
export const url=new URL("../icons/snowshoeing-fill.svg?v=1955d5b2f63c8270e73142058d2285e04497b49f31327dddfff170d1299ebc46",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
