export const name="thermometer-hot";
export const id="dl_a39972d004364a5d6445";
export const url=new URL("../icons/thermometer-hot.svg?v=6d7b0a16d921daf34126516e78c490b19771b8503a38fa310b40b51796ae6ec7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
