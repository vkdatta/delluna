export const name="conditions-fill";
export const id="dl_68099a61889a43858070";
export const url=new URL("../icons/conditions-fill.svg?v=fabf5e415a1b3e106212c831f9d06354957b94efc8463f1273b9125d3904a1b3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
