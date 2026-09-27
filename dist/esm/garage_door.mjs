export const name="garage_door";
export const id="dl_5269de56199449309b9c";
export const url=new URL("../icons/garage_door.svg?v=792e61f804f138e9ea607af15d23ba4887ea4d008fb7903b3da2fe79e2c40b22",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
