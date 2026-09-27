export const name="paper-plane-tilt-bold";
export const id="dl_961953b6a4104c4b8835";
export const url=new URL("../icons/paper-plane-tilt-bold.svg?v=21b4a5be1591108614de2d94e7a2898758c90d4acf661591cd2fedba636c388d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
