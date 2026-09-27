export const name="globe-duotone";
export const id="dl_ad655480699e4245879c";
export const url=new URL("../icons/globe-duotone.svg?v=7c865bfb3125c3346149b266138a99edf79793dc032319b0a950ff8e8b252fe4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
