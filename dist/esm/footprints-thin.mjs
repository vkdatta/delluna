export const name="footprints-thin";
export const id="dl_9726602df91c403596df";
export const url=new URL("../icons/footprints-thin.svg?v=71a205dcf777c05cb01e1d2d5dfca6141a661a2a9432c56f661d2b5b0e13f0c7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
