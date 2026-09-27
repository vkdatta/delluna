export const name="marker-circle-thin";
export const id="dl_abc30b4a152d4de18ad0";
export const url=new URL("../icons/marker-circle-thin.svg?v=53563177ea274c9658b979941b29d833b3fa20d6415458981ef8cc5e072baef8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
