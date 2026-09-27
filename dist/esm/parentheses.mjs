export const name="parentheses";
export const id="dl_7d22dcda5c59436c91e4";
export const url=new URL("../icons/parentheses.svg?v=98f29f120ea82868ff20c0cfe59143fa523b092c2162168befa82a1cf6b3dd11",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
