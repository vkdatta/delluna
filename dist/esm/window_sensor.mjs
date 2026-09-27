export const name="window_sensor";
export const id="dl_9c83051b38fe71fa2f4f";
export const url=new URL("../icons/window_sensor.svg?v=ef36a55dcd2e45a220687a9cf3a15374c3a9c08c6399e0bd1daf753054f192d4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
