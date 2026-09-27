export const name="tamper_detection_off";
export const id="dl_9e683961fb284561fe91";
export const url=new URL("../icons/tamper_detection_off.svg?v=6bf234b43cc82e409d7ae58cb7428cff09e06c87be30ca70451ca634f70ca43e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
