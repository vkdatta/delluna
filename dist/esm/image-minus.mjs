export const name="image-minus";
export const id="dl_6b4d2389faec483cbaa2";
export const url=new URL("../icons/image-minus.svg?v=5b1d814913c77f178526305ea243521234de8177c1534f9c6ed296793aa6747a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
