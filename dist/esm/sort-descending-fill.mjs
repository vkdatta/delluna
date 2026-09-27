export const name="sort-descending-fill";
export const id="dl_2e5692855b024608e314";
export const url=new URL("../icons/sort-descending-fill.svg?v=f077cd05c4b1ffce8b1db49dc1f3fe8b1ede0ab20609ab496273aa2505faf764",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
