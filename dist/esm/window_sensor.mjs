export const name="window_sensor";
export const id="dl_519f50f8363e87858202";
export const url=new URL("../icons/window_sensor.svg?v=a898c356d539b49562cae0a00b969dc0bde97a6297eebcee8ba24c42880ec0d2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
