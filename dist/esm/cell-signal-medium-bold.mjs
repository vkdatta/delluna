export const name="cell-signal-medium-bold";
export const id="dl_880cffcedc124c5ca575";
export const url=new URL("../icons/cell-signal-medium-bold.svg?v=1f84d2fb11c216e0bd43bd371b2d6774ae6ecaa3bcbaeec1075ad9b6c845618c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
