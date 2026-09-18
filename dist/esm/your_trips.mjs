export const name="your_trips";
export const id="dl_7796a9162f60406f8774";
export const url=new URL("../icons/Y/your_trips.svg?v=7f2c94ae40455ec3ed0fbb227c6dc87d13715b851c4528b23630b8d89cf5e4c9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
