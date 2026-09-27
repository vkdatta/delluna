export const name="do_not_disturb_on_total_silence-fill";
export const id="dl_bab5558ee9dc76a0ac13";
export const url=new URL("../icons/do_not_disturb_on_total_silence-fill.svg?v=2bf3b922048c27d426bec4888769a116650e3eb217a94b35be2a9908268d01c3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
