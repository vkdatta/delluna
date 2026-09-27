export const name="notification";
export const id="dl_9c259aa9f0534653a5ab";
export const url=new URL("../icons/notification.svg?v=476ba51473238879761225d990f323c176f81066113d3d6880e598157983cd21",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
