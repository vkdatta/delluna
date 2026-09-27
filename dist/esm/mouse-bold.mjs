export const name="mouse-bold";
export const id="dl_626f5c93924a4208b0d0";
export const url=new URL("../icons/mouse-bold.svg?v=cbabe752192dfc0f5e42882cc5bb1da2af3515138c0044dff6258fc5dd5e3e00",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
