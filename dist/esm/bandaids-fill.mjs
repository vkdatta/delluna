export const name="bandaids-fill";
export const id="dl_17c6674b8a3e43c1a5bd";
export const url=new URL("../icons/bandaids-fill.svg?v=66faf7a9ca5a46c8c97a8aa448c2b7029b81e7857a58d03357ef9d88f3459421",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
