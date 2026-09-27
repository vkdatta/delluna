export const name="detector_alarm";
export const id="dl_582db178956b14b16675";
export const url=new URL("../icons/detector_alarm.svg?v=23bff7fda0597ef03e0be9a3ac29cbb0e2004e575c34e581cbb3af48b0d16630",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
