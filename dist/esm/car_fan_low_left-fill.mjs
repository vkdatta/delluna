export const name="car_fan_low_left-fill";
export const id="dl_adc79888ceef5eb13d97";
export const url=new URL("../icons/car_fan_low_left-fill.svg?v=4ad30e0b921c54d0d04abe11b8ba34bd86343ca20ec071acf67cf1c28b6f39f0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
