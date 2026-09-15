export const name="bookmark_check-fill";
export const id="dl_38ed0fa469ae4eccb28e";
export const url=new URL("../icons/B/bookmark_check-fill.svg?v=ddc1abc930492d40f4cab509b3e8d9e2c84ea653f17a1f3c585d53c9ff7787d6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
