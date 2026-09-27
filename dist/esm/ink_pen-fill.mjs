export const name="ink_pen-fill";
export const id="dl_ca03f1b8e369363d0daa";
export const url=new URL("../icons/ink_pen-fill.svg?v=799bb6fe29c72f9981fd3a410067ef4a0e5a89e5221dd941272bc2c7f948469c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
