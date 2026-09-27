export const name="align_center-fill";
export const id="dl_29db4f92b7bd0423204f";
export const url=new URL("../icons/align_center-fill.svg?v=afeff7732adc68ab444122dcf459196836e293dd448c9452e2e7966462598b19",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
