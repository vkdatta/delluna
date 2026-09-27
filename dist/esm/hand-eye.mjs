export const name="hand-eye";
export const id="dl_30b16a52e93b4a68a43c";
export const url=new URL("../icons/hand-eye.svg?v=2694e94fdc2cd9df70c45082c8d6a9039cbf8ff3f7621d3e2ab63d71c2aace11",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
