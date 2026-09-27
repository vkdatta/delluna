export const name="cell-signal-low-light";
export const id="dl_0d2d426785c04f85b438";
export const url=new URL("../icons/cell-signal-low-light.svg?v=250cf1f5960be51a1c1b03d72a54f6235585173d30fc7753547b3e44b6a26089",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
