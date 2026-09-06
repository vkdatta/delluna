export const name="airplane-tilt-thin";
export const id="dl_9ac91103b47044889cf8";
export const url=new URL("../icons/airplane-tilt-thin.svg?v=a8d889348e1fbaea866ff267070efd5b33d862ef323d7c812fdd181f3bd9c791",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
