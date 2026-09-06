export const name="cursor-fill";
export const id="dl_fbcbca775dde4d0e8110";
export const url=new URL("../icons/cursor-fill.svg?v=7b3c9707eee43737c4109a73f081d6059b8c65f1279bb5dd8e9a3c75e185013d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
