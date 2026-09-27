export const name="cards_star-fill";
export const id="dl_4e0f70fc53b45f99f71f";
export const url=new URL("../icons/cards_star-fill.svg?v=41fd716bfd0533be0e8e8cedafa2dc42f2ec99185190353ba711fd0a9b9f188a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
