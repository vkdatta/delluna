export const name="cheese-light";
export const id="dl_1670a4735dd94cd0915c";
export const url=new URL("../icons/cheese-light.svg?v=d70927a9f8644ba9dbbfd96757cd988010d3da75b38177d930a9fba28c75f6bb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
