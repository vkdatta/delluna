export const name="file-lock-fill";
export const id="dl_35d0342916304385bd56";
export const url=new URL("../icons/file-lock-fill.svg?v=e39fdff85927d92786376b568e06db58a297d6aa8c991c7e2cbc4575600c8130",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
