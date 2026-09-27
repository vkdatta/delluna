export const name="lucid_3-radar";
export const id="dl_b6ffc16986ca4785b767";
export const url=new URL("../icons/lucid_3-radar.svg?v=e4f5cefebb643f451005c3bb8309f08fcdd33d0b275edaabfe76ba48b564d488",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
