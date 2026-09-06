export const name="person-simple-ski-light";
export const id="dl_34c0603d90824d02af77";
export const url=new URL("../icons/person-simple-ski-light.svg?v=2799463ad783f3ae9caccbcd7405c855297028c00fdb8f627864785882711fcc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
