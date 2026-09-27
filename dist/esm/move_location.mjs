export const name="move_location";
export const id="dl_c12a1d81de5d4b69ec2a";
export const url=new URL("../icons/move_location.svg?v=789ed00465aa88c35eab4b92359e690968511f7d99b0c06adb10485a9438b689",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
