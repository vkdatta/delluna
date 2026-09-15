export const name="car_lock";
export const id="dl_02a34f46b4a6477082e3";
export const url=new URL("../icons/C/car_lock.svg?v=b7f63b8ea08516c39936f027573da748957c59850b5c12779259b05f49358cec",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
