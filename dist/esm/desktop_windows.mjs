export const name="desktop_windows";
export const id="dl_ab357a8b0d618c616934";
export const url=new URL("../icons/desktop_windows.svg?v=c535737d9e718121f3514708f3aca1082053ec81ee8fdcba1b541e0eb0b21347",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
