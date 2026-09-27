export const name="tonality-fill";
export const id="dl_c3bab7139bc613c963a4";
export const url=new URL("../icons/tonality-fill.svg?v=274b48813b45f074a2f78f4a7500242e9b8f6412af6d4c9ebae64abba4d5dc5c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
