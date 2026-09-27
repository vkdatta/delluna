export const name="camera_outdoor-fill";
export const id="dl_1ed59f16233b9b603284";
export const url=new URL("../icons/camera_outdoor-fill.svg?v=65e798d1334bd3ec0046da805c874538c0ad450eaa70a753795110cc69cbb523",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
