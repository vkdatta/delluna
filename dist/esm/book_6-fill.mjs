export const name="book_6-fill";
export const id="dl_8a1703577224383c66d3";
export const url=new URL("../icons/book_6-fill.svg?v=3acc63775f58c9a5974e6b903611b2c3e4d70e273cc39d6203f40b2b1acec1d2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
