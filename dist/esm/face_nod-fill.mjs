export const name="face_nod-fill";
export const id="dl_2f91c7cc5426fc6e1762";
export const url=new URL("../icons/face_nod-fill.svg?v=44d27ed154f452a6e7caaabb7c15a3877abb45419058568d728f0426a0564432",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
