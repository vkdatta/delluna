export const name="arrows-in-light";
export const id="dl_1b940b34dde1457a8463";
export const url=new URL("../icons/arrows-in-light.svg?v=2a895ac058f07732d1d446ac8f2167ac9264b7d2550e9ca095411f0c27ef1337",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
