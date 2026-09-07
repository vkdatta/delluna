export const name="castle-turret-fill";
export const id="dl_38560704b7c94d6583c5";
export const url=new URL("../icons/castle-turret-fill.svg?v=f6e506372e87364bb58dfeec8cb599895b2adf3d2149cb3b5f0999bfe62d8781",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
