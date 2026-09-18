export const name="local_dining-fill";
export const id="dl_6d7271ee5b76423aa7d6";
export const url=new URL("../icons/local_dining-fill.svg?v=e5ae352c6ba124183a7e8605f896720c33ead0178ef6f779e3b7f9b894f0a9d0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
