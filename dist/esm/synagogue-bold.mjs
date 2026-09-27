export const name="synagogue-bold";
export const id="dl_09caf138ab3f714591af";
export const url=new URL("../icons/synagogue-bold.svg?v=822cf524aff0fbe70e491c2cf853c4704e3c87cb577c10e03742cfe25163db7c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
