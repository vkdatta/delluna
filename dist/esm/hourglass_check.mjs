export const name="hourglass_check";
export const id="dl_c1f809f29b74cd052361";
export const url=new URL("../icons/hourglass_check.svg?v=b28f0d16d5ba5674c79f1b2300b070cb73ee91c2ca11cbc2eb0eed5124cf2d2a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
