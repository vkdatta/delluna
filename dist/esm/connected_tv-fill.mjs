export const name="connected_tv-fill";
export const id="dl_36ba9e77ba9217ad6093";
export const url=new URL("../icons/connected_tv-fill.svg?v=573580ab599f6a35f84cb2d4ac36e5df4d17464bbfba7f1d5700407fcbcfa502",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
