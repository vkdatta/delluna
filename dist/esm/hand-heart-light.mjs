export const name="hand-heart-light";
export const id="dl_0315de405f7842029873";
export const url=new URL("../icons/hand-heart-light.svg?v=098a84f73d9c4277d9273b1aa055ad83351365458a86b1347183ad1e837a1eb2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
