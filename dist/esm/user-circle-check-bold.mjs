export const name="user-circle-check-bold";
export const id="dl_c654de02a564ea59851a";
export const url=new URL("../icons/user-circle-check-bold.svg?v=1087eb457b8bb69468128bd2878e58ff5ed87619d1bf287148c0e51f56bf32d8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
