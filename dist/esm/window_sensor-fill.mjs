export const name="window_sensor-fill";
export const id="dl_26b54b7168e8bd0848f8";
export const url=new URL("../icons/window_sensor-fill.svg?v=3818bcb6cea2eb2ed2e17ea0f18c89fd531eb71815e66e7fc4d6f8249881af29",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
