export const name="glass_cup";
export const id="dl_166dce0b3386bc729fab";
export const url=new URL("../icons/glass_cup.svg?v=c8922ab3b2cddaf40ce9b198153a46e3525d7a330a5a07cdc55dcffb623c9fec",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
