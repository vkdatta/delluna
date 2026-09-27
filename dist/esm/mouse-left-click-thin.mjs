export const name="mouse-left-click-thin";
export const id="dl_edafe8cd746b41558644";
export const url=new URL("../icons/mouse-left-click-thin.svg?v=71a088c1ab5aa77146e0a359caeec1c724602612d8c0fd3bfda966de1ff84845",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
