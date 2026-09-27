export const name="add_link-fill";
export const id="dl_30b36eeac889b38c31ad";
export const url=new URL("../icons/add_link-fill.svg?v=cdab591fc0bdc475e9fb0d6de5078b786a0906360e52935e3e74ef9e90daae08",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
