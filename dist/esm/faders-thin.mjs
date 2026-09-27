export const name="faders-thin";
export const id="dl_543ce05a87f543b2baaa";
export const url=new URL("../icons/faders-thin.svg?v=160d5ddfe1fe357d9326d3d69c04aed3d5bf1fff1300631966c563f1ba4d5243",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
