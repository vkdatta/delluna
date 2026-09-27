export const name="funnel-simple-x-light";
export const id="dl_1261409c5370491ca70a";
export const url=new URL("../icons/funnel-simple-x-light.svg?v=f80f522863794fe284b69e6331b59d5debb764908f5ef71971be81fd98e2b597",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
