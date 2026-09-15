export const name="drag_click";
export const id="dl_fff13a2550f746778979";
export const url=new URL("../icons/D/drag_click.svg?v=238727344fb63614163a1e7f6c804c3fab8ff87741ad0a66c19832e80a9297b2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
