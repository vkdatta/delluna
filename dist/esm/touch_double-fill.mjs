export const name="touch_double-fill";
export const id="dl_3cb33ce5153d83d17f9f";
export const url=new URL("../icons/touch_double-fill.svg?v=d657a28f534742cf741c4ec2222a9dfc42c2d76e94c12f55e14ac59993a945f3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
