export const name="switch_camera-fill";
export const id="dl_a43d5229e8f08e40572b";
export const url=new URL("../icons/switch_camera-fill.svg?v=ebbc62e292e4300bf607042bcf24aeefa8d23534e172a1ee01aff896d3fe0b28",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
