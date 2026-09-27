export const name="shades_closed-fill";
export const id="dl_38132afd190764276b34";
export const url=new URL("../icons/shades_closed-fill.svg?v=7803e8172af043e8375fb6e09f8259d5e7ad40dbda12281c397d5c2b3fdac72a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
