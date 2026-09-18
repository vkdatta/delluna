export const name="tamper_detection_off";
export const id="dl_ed8023f061844a73830b";
export const url=new URL("../icons/T/tamper_detection_off.svg?v=f7030055db72a2c720bc4b224a3bc50a6ebb3908fc710b594c27d18a7a01dad4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
