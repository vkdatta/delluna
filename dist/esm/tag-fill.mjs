export const name="tag-fill";
export const id="dl_40936c78d443b875f9df";
export const url=new URL("../icons/tag-fill.svg?v=c46f3384dcda8a9bbe79c572301795a7056038dee8b9799b7f75747def8f1fc0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
