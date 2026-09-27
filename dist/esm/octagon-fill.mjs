export const name="octagon-fill";
export const id="dl_8acb6c3d4fa54970808f";
export const url=new URL("../icons/octagon-fill.svg?v=c66b286e9b6a61853d56c71cff768a188c55da0e3136e5a1beabab091e74d5be",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
