export const name="car_fan_recirculate_2";
export const id="dl_12054cbdce6d5f411e00";
export const url=new URL("../icons/car_fan_recirculate_2.svg?v=a65279b2378bd0e0654a9bc92d505f558199b8afb1b65945fe6f58eeef5336c8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
