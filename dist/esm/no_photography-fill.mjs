export const name="no_photography-fill";
export const id="dl_35ce39a9f6500e75f5fd";
export const url=new URL("../icons/no_photography-fill.svg?v=8ea16f4baa3bd4cb7e70555a164e131625864bb5f06347ba290b7f26ef231b72",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
