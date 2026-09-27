export const name="cell-signal-none-bold";
export const id="dl_f4a66c2722b944fda205";
export const url=new URL("../icons/cell-signal-none-bold.svg?v=fe6fd54dbab889776ec30c308eacdb810b2015b4c051e32c32a228f2b512e6c0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
