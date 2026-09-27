export const name="touchpad-off";
export const id="dl_1601aa1441be4d8c9217";
export const url=new URL("../icons/touchpad-off.svg?v=c92094424b196395780c545d315c0754e5061c256d52ab01309c03ac9a189b28",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
