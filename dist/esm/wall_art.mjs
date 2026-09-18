export const name="wall_art";
export const id="dl_d0df6f65e9dd412cbd19";
export const url=new URL("../icons/wall_art.svg?v=ae8f9e92c3f4c130b4d15e25ba8a06150fe4eedf90c1f25b3d1334d970afcb04",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
