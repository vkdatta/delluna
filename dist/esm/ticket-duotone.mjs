export const name="ticket-duotone";
export const id="dl_8e190c849f4c74d72344";
export const url=new URL("../icons/ticket-duotone.svg?v=d72c44d0bbea504716a3f1c1ce060413b36706c51dfdfbae1810e7dda0b73569",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
