export const name="car_rental";
export const id="dl_57a17570ecbe8af2cd03";
export const url=new URL("../icons/car_rental.svg?v=20b8e3be00336234367b89eca886351af3207fc9351b4f58fa068b19cff7f0c1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
