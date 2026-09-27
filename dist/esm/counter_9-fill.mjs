export const name="counter_9-fill";
export const id="dl_75e94502c24333b8dc42";
export const url=new URL("../icons/counter_9-fill.svg?v=1434b080d630c81804b3237599e1bee2a4c6eae96b16ea781f9161c51835d4dd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
