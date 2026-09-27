export const name="shower";
export const id="dl_ef9a2b09beb22561632a";
export const url=new URL("../icons/shower.svg?v=c3424d9603b3c2748291483df71c5885783c814b05c61df1f8d443c94f6901de",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
