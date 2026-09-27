export const name="switch_right";
export const id="dl_6a2632f98946368b0162";
export const url=new URL("../icons/switch_right.svg?v=4909c0031ce0dcb699fd2568799ce308a163489b42cf2d3536aa2c38b2e0bf49",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
