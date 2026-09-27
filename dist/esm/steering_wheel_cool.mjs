export const name="steering_wheel_cool";
export const id="dl_99983d4f579369987ef1";
export const url=new URL("../icons/steering_wheel_cool.svg?v=48f6f524958b5f3933eec013791df9f5912c71425f2d80e5e5f81b4738990064",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
