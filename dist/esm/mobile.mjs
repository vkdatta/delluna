export const name="mobile";
export const id="dl_3251da5955a04189951b";
export const url=new URL("../icons/mobile.svg?v=bedbce3316e8b5fdc82edad6fd5f5d3207077cc868e2442bc707e07f358c2d17",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
