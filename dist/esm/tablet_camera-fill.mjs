export const name="tablet_camera-fill";
export const id="dl_b5b55c0df849f2aeafd8";
export const url=new URL("../icons/tablet_camera-fill.svg?v=601ed1b478ba67ad7c06b8d53a41a313ab638ae9f5e50ef341c285adc52043d4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
