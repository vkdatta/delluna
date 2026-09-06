export const name="presentation-duotone";
export const id="dl_115adb9b4ff740498e7b";
export const url=new URL("../icons/presentation-duotone.svg?v=5bef47a8ac5e0c608552ff47c0de868cd9349f0c1fd30a21121c0121475dd030",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
