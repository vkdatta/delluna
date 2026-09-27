export const name="fan";
export const id="dl_969ffb56e12e4d61b97a";
export const url=new URL("../icons/fan.svg?v=5c1e71cc58175d6f246a5f91e8acb91627b566cf935b2cae12d4020a6fc6e5f9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
