export const name="clock-afternoon-duotone";
export const id="dl_3d35ee5329b24f77874a";
export const url=new URL("../icons/clock-afternoon-duotone.svg?v=e4f3c497a0e16e2934bc09370bf764f473b8800b7577f40b02cb635c74496a69",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
