export const name="mouse-simple";
export const id="dl_e02f1692478d497ebfb7";
export const url=new URL("../icons/mouse-simple.svg?v=b0c755ea17209ba2eb2d0c599240d8c8f183bd329e9dc109aff00713abc5df27",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
