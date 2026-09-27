export const name="warning-diamond-bold";
export const id="dl_0b492758996605d14a2d";
export const url=new URL("../icons/warning-diamond-bold.svg?v=c9d37f254704e0aa62b47aa8099ddab1e9153cf53d631cdd6656b359f95f60aa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
