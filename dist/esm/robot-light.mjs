export const name="robot-light";
export const id="dl_75e8ec536f384c3ca508";
export const url=new URL("../icons/robot-light.svg?v=14fecf80ab5da0104ee4897fbc436fd63a8e2bb423bcdf06d7e3caa8ee12611b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
