export const name="bus_railway";
export const id="dl_80469405eca13f3b44d7";
export const url=new URL("../icons/bus_railway.svg?v=635f6eb5290cb60cefa376ab6060766a1271efd9dbfe04733332b9d1fb2fce87",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
