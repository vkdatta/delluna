export const name="local_convenience_store";
export const id="dl_272a09abb1764891a50a";
export const url=new URL("../icons/local_convenience_store.svg?v=11309caeeaecbfae0cc77ae2fa4c41d2ad21b42c40fb72b15f0437ffdc32bebc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
