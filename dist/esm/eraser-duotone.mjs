export const name="eraser-duotone";
export const id="dl_e72a46690bb34e779812";
export const url=new URL("../icons/eraser-duotone.svg?v=b462fc2b65ae9854ba1e3d6fdcce43fc742f513bb9449e61599965b388fe8331",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
