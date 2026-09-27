export const name="vector-three-bold";
export const id="dl_a9d865c436f01a3a0c87";
export const url=new URL("../icons/vector-three-bold.svg?v=24023647f22d0197e7bc27817134dacd8e150691f6cc2c45a8adebfbde6011fb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
