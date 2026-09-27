export const name="book-thin";
export const id="dl_cf92052e21c84e56b405";
export const url=new URL("../icons/book-thin.svg?v=01a6da45f54a727d3d1bbc495a7f73e76acdd94f3757e15521801b327adc7d22",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
