export const name="toolbox";
export const id="dl_22d3c9c948394f25988b";
export const url=new URL("../icons/toolbox.svg?v=5e35e75b4a63d1da747ca801085f4288af1142326e49012f3d305ad48ad57dd8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
