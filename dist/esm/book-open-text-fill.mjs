export const name="book-open-text-fill";
export const id="dl_e990f4cb82fc416285b6";
export const url=new URL("../icons/book-open-text-fill.svg?v=293124189b6a2221f00944e81046f2208fe0aedaf8d118b6018365e686325ad9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
