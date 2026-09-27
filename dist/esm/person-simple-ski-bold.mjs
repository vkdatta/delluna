export const name="person-simple-ski-bold";
export const id="dl_45471e4b097044cc87d0";
export const url=new URL("../icons/person-simple-ski-bold.svg?v=bb1884099a548b05817b58920a2f134a6b75aa1dad28f70415d0a20ccf6006d1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
