export const name="info";
export const id="dl_308523e5cf143553e4fb";
export const url=new URL("../icons/info.svg?v=12c099b77dd111cb938dc4303e36e466791867a19db6bc92e0baf1db1ea4c1c0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
