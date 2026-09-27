export const name="dots-three-circle";
export const id="dl_31e0b5239644432fbb85";
export const url=new URL("../icons/dots-three-circle.svg?v=2fce7d04bfaa1eb9c4c48f79e48d13fdb6b06ecf8ae65f08d50113f74a8810fe",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
