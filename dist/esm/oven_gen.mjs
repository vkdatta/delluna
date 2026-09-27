export const name="oven_gen";
export const id="dl_cd0661512c0b0546176b";
export const url=new URL("../icons/oven_gen.svg?v=89c8302afdaa591b796b5a7aaa7d9230f53c053a2d58ef49670d20d44c07932b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
