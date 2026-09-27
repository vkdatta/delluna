export const name="hourglass-medium-fill";
export const id="dl_d514f55a5f3645fa8a95";
export const url=new URL("../icons/hourglass-medium-fill.svg?v=36bbcd6e4673bd74af83427cc8a10551d6b82afc85f4da7855e31437e5fdb193",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
