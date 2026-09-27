export const name="bomb-duotone";
export const id="dl_7cab67acb8e54316b840";
export const url=new URL("../icons/bomb-duotone.svg?v=5223892285e5b1bbe227a75485e1c86d17b9b61d41d482259b41493b6e44ecb1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
