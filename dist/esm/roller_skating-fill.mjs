export const name="roller_skating-fill";
export const id="dl_a4a03babd87c9536a6f0";
export const url=new URL("../icons/roller_skating-fill.svg?v=9a950122ab6eb72ac599c67728f1354a51de2ffab6bc2e4345f3e615537f5f63",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
