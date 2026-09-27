export const name="b_circle";
export const id="dl_f20b2aac5c81dbd0cc61";
export const url=new URL("../icons/b_circle.svg?v=8ed57c0c3efed086c0663f92799f2203ae9ff599eca65c515b3068b7f9cea1c8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
