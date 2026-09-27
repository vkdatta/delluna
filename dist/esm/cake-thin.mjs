export const name="cake-thin";
export const id="dl_8b410cacfa3a477abc7c";
export const url=new URL("../icons/cake-thin.svg?v=62dd9bf2811e34bea617c2234142844b28628b05f79bb33c5dc64075411e1139",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
