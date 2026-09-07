export const name="arrows-counter-clockwise-fill";
export const id="dl_89c8a06e684d4446b958";
export const url=new URL("../icons/arrows-counter-clockwise-fill.svg?v=33c1c86d2c46fde7229ebee389f25bf20543d5399e4ded608bbd3050ef61e841",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
