export const name="clock-afternoon-bold";
export const id="dl_3fe6b3c445554f4c8298";
export const url=new URL("../icons/clock-afternoon-bold.svg?v=cd1d41f95efc8ffb0ed5e1b7e512342512826e77be93d66421378e9188517d1f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
