export const name="tray";
export const id="dl_bceb780ff0d8c4210c1b";
export const url=new URL("../icons/tray.svg?v=a3c5e8cedec1231ec5095d2838e08964451635fbfaf752862a65c127413ddc26",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
