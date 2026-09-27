export const name="counter_4-fill";
export const id="dl_dcacb125c2f3f26b31a2";
export const url=new URL("../icons/counter_4-fill.svg?v=e622c04bc6a052279a194027b171fda8a1db87e07823997a4e6ad0f4e10b8fcd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
