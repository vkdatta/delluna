export const name="search_gear-fill";
export const id="dl_c7c0b1a715ae47a1b6ed";
export const url=new URL("../icons/S/search_gear-fill.svg?v=9f7f3bfa7e12e3f22efd7a29810ced2ddb95260f54e5b5b29bf88ba467cf5fd8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
