export const name="graduation-cap-duotone";
export const id="dl_1af1dcc91caa48a2bf88";
export const url=new URL("../icons/graduation-cap-duotone.svg?v=69ddd3823071bfa54e76244a4eeb376cf459b24d9251d775dc964ba862979dba",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
