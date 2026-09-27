export const name="file-c-sharp-duotone";
export const id="dl_d1dd5a7094ce4ddfa56d";
export const url=new URL("../icons/file-c-sharp-duotone.svg?v=3171b08e269b1f0e3fee65b1fc012cd6e9e5ee9515653d4b30994eb4febe5c54",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
