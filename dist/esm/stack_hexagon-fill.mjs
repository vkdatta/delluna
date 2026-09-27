export const name="stack_hexagon-fill";
export const id="dl_a0dbf3b09561b0bcc128";
export const url=new URL("../icons/stack_hexagon-fill.svg?v=98bb2de6efa699391ccd0faa91b16e8967022ffdc34a895d064271fc14bf936d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
