export const name="baby-fill";
export const id="dl_e1d3d4bab5b44c37bc15";
export const url=new URL("../icons/baby-fill.svg?v=7211b178787550826ea15f380f680c1711825bb06721c54adfb452c93d068837",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
