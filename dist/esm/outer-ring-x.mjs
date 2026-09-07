export const name="outer-ring-x";
export const id="dl_8e0790c478f24cb18a37";
export const url=new URL("../icons/close/outer-ring-x.svg?v=ea41f3ba776c728fcbc4cf53b70a72b029dc56736b9d8f659197d1c534f3f37b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
