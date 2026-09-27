export const name="cannabis-fill";
export const id="dl_98afff74911396536a43";
export const url=new URL("../icons/cannabis-fill.svg?v=66d4a8d5c6a6916e330d53915670c590355cfe9558277366fe2eb9f5c14f2c73",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
