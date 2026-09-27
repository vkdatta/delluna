export const name="text-h-three-duotone";
export const id="dl_f10916c2944b56991e65";
export const url=new URL("../icons/text-h-three-duotone.svg?v=449f3e4eb70cd745eaf26dd7fb48407d6bc85324084c9637a79955a939710bb1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
