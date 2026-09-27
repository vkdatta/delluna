export const name="rotate_right-fill";
export const id="dl_d0d9641afd243fed0bc6";
export const url=new URL("../icons/rotate_right-fill.svg?v=8d71e39d2b556b3b1678e3c4f48c1a9ce613d26963fbc7f1b3f53e1715dac6bf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
