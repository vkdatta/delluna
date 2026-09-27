export const name="stop_circle";
export const id="dl_c05014f1b4c21a0265af";
export const url=new URL("../icons/stop_circle.svg?v=b487dc10b6709f2277e39aac634b740e517040c94c83bc93f19464ad45e51508",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
