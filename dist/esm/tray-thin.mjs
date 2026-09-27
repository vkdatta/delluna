export const name="tray-thin";
export const id="dl_187b1e2cd7e33e5c1501";
export const url=new URL("../icons/tray-thin.svg?v=72e5edac3b50d5708b71112c67a6834a63550a12cf720395cdcf26b44ae9de0b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
