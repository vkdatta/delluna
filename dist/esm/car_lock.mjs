export const name="car_lock";
export const id="dl_dfd4e8f7964f585e2882";
export const url=new URL("../icons/car_lock.svg?v=c8592019edf47cd6ee4fd5495cc87fe28718fc24922ec82283d3272b8cb2a151",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
