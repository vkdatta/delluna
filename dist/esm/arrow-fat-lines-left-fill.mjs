export const name="arrow-fat-lines-left-fill";
export const id="dl_55004637893a465bb6da";
export const url=new URL("../icons/arrow-fat-lines-left-fill.svg?v=327d40f54d54c17221311af8fcbfe70de5bba93628495f1da2dad6fb2e5aa9b7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
