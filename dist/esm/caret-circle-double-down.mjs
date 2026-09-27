export const name="caret-circle-double-down";
export const id="dl_f3170d045bd6469d96ba";
export const url=new URL("../icons/caret-circle-double-down.svg?v=57c24356226d39c6c79c78c5a896b39d0b29d637f62ab875dee3eb27aaaa2716",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
