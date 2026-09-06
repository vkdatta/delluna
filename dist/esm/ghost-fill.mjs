export const name="ghost-fill";
export const id="dl_bfa6b4e28eea42a3acae";
export const url=new URL("../icons/ghost-fill.svg?v=de9cde53225677f9f5cdebc92ffa02a7c150d6736b75d12b2f5b8f46171e9835",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
