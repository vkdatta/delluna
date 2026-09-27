export const name="breakfast_dining-fill";
export const id="dl_a57be7787115aca00a8e";
export const url=new URL("../icons/breakfast_dining-fill.svg?v=2d37c271e98b6777375cb6f6339bd3948b62e5643a8177ed0553bb16a36733c0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
