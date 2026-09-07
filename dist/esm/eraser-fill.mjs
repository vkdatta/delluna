export const name="eraser-fill";
export const id="dl_84f69ac581254167b2c5";
export const url=new URL("../icons/eraser-fill.svg?v=7dd93ef09530c2d88cfe43246b057156ffd72089a07b8a0a9fdc086cde96b610",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
