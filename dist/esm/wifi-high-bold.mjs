export const name="wifi-high-bold";
export const id="dl_6f9ba740d94c39ae1df4";
export const url=new URL("../icons/wifi-high-bold.svg?v=fe849077a628d9597a54e7fcc4e39ae37d870672a2969dbbf146bf07368a29f8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
