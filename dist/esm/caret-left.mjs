export const name="caret-left";
export const id="dl_ee247daf147e4fc9803a";
export const url=new URL("../icons/caret-left.svg?v=623bf248fe21a8170344e168aaac2e174119cea5d7c5d0fb0dc84f581009475f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
