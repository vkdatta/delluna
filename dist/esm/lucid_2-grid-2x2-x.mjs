export const name="lucid_2-grid-2x2-x";
export const id="dl_6c75ed3746f746a097ef";
export const url=new URL("../icons/lucid_2-grid-2x2-x.svg?v=2fabb0a8ca39f5338f7b809f7669f21bd7783defd1931fddc8a7afead6073c84",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
