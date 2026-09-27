export const name="arrows-clockwise-fill";
export const id="dl_7ffe049cb13a43d19636";
export const url=new URL("../icons/arrows-clockwise-fill.svg?v=e53906f0baf27d82db3d7e94df5da69767bfce8b186c20df91483bb32ffb24e8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
