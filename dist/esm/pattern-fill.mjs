export const name="pattern-fill";
export const id="dl_fe66c61e91ca1b5974a1";
export const url=new URL("../icons/pattern-fill.svg?v=7515f3b5e720b45b6648e24785697170fbc30368ed6862380d3f178d7219e1c4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
