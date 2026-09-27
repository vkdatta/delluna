export const name="garage-light";
export const id="dl_96f9367bc8a14164a600";
export const url=new URL("../icons/garage-light.svg?v=2ebdd95ea729c359651bb8a89b299f8a99b78ffe0ee73ea7bd182948c090f966",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
