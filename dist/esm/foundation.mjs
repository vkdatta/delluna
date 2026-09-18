export const name="foundation";
export const id="dl_34bf9fb5cce24e94bd4f";
export const url=new URL("../icons/foundation.svg?v=63c2e017111694a5075306a035dd57259d326ebd17247f64224e981fe74ae841",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
