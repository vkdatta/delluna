export const name="sofa-fill";
export const id="dl_61e0b3102ceb99c31d15";
export const url=new URL("../icons/sofa-fill.svg?v=a5ca9327cb0939a453f08a374fd7209dff9c04202e7e39081fc854b1f360ed11",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
