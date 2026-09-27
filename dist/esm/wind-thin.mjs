export const name="wind-thin";
export const id="dl_bd833d288c50cd9ea6ea";
export const url=new URL("../icons/wind-thin.svg?v=b8fe20bafd003541e39e0e75bc00a442c40880dbeb0bcbd16d909c9903daf1d7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
