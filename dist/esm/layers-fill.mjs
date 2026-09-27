export const name="layers-fill";
export const id="dl_4b41835a1cb40015b28a";
export const url=new URL("../icons/layers-fill.svg?v=178bf1385166203df240bee756eb89eeca3e0af46bc1067d996dd7c0c1550d00",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
