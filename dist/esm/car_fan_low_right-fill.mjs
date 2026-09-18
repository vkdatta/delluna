export const name="car_fan_low_right-fill";
export const id="dl_416f994ccbfe43c088b6";
export const url=new URL("../icons/car_fan_low_right-fill.svg?v=ef2e7c4daecf9b58671b631fa6ecef35df81a08df9ed45f93f575dc15eaaed44",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
