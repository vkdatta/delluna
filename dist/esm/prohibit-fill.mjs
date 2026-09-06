export const name="prohibit-fill";
export const id="dl_7bb95cf84444489ba332";
export const url=new URL("../icons/prohibit-fill.svg?v=f4082e6bde36411618d4da65fe087cd3b746bb0e8070fec3d2e11b5aee059675",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
