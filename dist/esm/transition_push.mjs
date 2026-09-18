export const name="transition_push";
export const id="dl_ee3edd3241c74f0483d7";
export const url=new URL("../icons/transition_push.svg?v=c1048b2e2f8eeb179dda844b94a3d1e3b626790d854c7c668cfa42557a219183",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
