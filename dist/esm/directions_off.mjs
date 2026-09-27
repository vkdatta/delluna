export const name="directions_off";
export const id="dl_16060f3410b3ff028eba";
export const url=new URL("../icons/directions_off.svg?v=35bfd01a7e9d56de1c61b0b74cbbf1c8f1770568b6f13faa63ffa0c40fdfbb51",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
