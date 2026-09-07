export const name="wrench-bold";
export const id="dl_6b40fdb04aa4495cb75c";
export const url=new URL("../icons/W/wrench-bold.svg?v=f4cf2bcd4c37361f3ebc4940a0ac7df37ad45ef74db23ed1076dcbcd6eca2d2e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
