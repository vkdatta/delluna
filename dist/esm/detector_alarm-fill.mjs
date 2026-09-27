export const name="detector_alarm-fill";
export const id="dl_25b79fb19fe9f08c90ab";
export const url=new URL("../icons/detector_alarm-fill.svg?v=0bf831b379350fda705b7aad176ed3a3fb8b4fade3172c643c605ec4a4795640",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
