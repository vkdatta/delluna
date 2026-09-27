export const name="hash-bold";
export const id="dl_af95fa491c2149f5a20d";
export const url=new URL("../icons/hash-bold.svg?v=f8378dc5ee43321b7109bc16ab2fcb0ecf48d3c62f2d694f77c7607b43fb87b1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
