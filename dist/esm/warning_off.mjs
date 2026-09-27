export const name="warning_off";
export const id="dl_1ef6269d116733f857e5";
export const url=new URL("../icons/warning_off.svg?v=eae109ff1dab0e6cc6346b7564661be679fa603dc55dbd781508eab4a2d63e04",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
