export const name="stack_off";
export const id="dl_a0d2bffe8c573a7165ef";
export const url=new URL("../icons/stack_off.svg?v=e342e6824dbf1da55314404ef01cee97066b5c5558593c6a3cc5f14b5802a511",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
