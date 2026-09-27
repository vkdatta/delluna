export const name="binary";
export const id="dl_2a26b7755a9043278eb0";
export const url=new URL("../icons/binary.svg?v=e31228600b07b6447496adb248eee603a3d4d95d68a44dc11739a134f0920408",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
