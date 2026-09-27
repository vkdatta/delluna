export const name="ods-fill";
export const id="dl_0764b7b2c09a96e46c05";
export const url=new URL("../icons/ods-fill.svg?v=8c7c24860f08501a5c7303d2ba85294731b95464bb8260ff0dcdc514bcaa8960",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
