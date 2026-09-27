export const name="wheelchair-motion-fill";
export const id="dl_c1737c3a9c1ce692a38c";
export const url=new URL("../icons/wheelchair-motion-fill.svg?v=5e3ecb0347cf15f24f9d847799953db2abb9e08f1c488c5ed6f5b58158e9c72d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
