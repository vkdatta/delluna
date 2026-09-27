export const name="union-duotone";
export const id="dl_f2c9b0dde31e49cc8dd1";
export const url=new URL("../icons/union-duotone.svg?v=2a25523df708356cc8bfb9265bac2b6a9f16320b16797a7f1fdd2acc232cf23c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
