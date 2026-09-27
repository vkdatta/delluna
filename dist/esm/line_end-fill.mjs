export const name="line_end-fill";
export const id="dl_c94cdeb0c33570ea20c7";
export const url=new URL("../icons/line_end-fill.svg?v=7becffcf47ca86574fe35da243cca417994c002f70ec571600713ee7941ae2a5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
