export const name="security-camera";
export const id="dl_c476052b5910f29e5994";
export const url=new URL("../icons/security-camera.svg?v=106d3ebbe5dc43597a43602ce6ef8bb3584c33ae2647b9380da3a7c5ed245400",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
