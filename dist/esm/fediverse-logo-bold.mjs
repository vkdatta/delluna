export const name="fediverse-logo-bold";
export const id="dl_b9fa2ffbddf5435894d7";
export const url=new URL("../icons/fediverse-logo-bold.svg?v=85c650a6db5d83acac7cfc8fa5820547cc32d23341b8656186fac3c1d4165124",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
