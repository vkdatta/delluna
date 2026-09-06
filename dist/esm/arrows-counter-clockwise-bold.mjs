export const name="arrows-counter-clockwise-bold";
export const id="dl_d93ba6390649411a8ae5";
export const url=new URL("../icons/arrows-counter-clockwise-bold.svg?v=dcd6284724e71c1be997af04bafb4b0e4386c0647f27e6ff643c7cb3156699ca",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
