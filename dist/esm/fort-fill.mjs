export const name="fort-fill";
export const id="dl_80f4c2476da805c540f6";
export const url=new URL("../icons/fort-fill.svg?v=1fe305d6b6538ea4a07d310b29bd68bc358af3bb13ea0a9b6cf681df44b810b4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
