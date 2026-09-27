export const name="local_car_wash";
export const id="dl_31a82bc484dddb261701";
export const url=new URL("../icons/local_car_wash.svg?v=8bbb364f3236846f081bae92f6ffd2942292555a2cf5d2de5dfdf12fd9b45dc4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
