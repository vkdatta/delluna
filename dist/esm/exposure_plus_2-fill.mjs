export const name="exposure_plus_2-fill";
export const id="dl_5aab46cfc636561214ad";
export const url=new URL("../icons/exposure_plus_2-fill.svg?v=248ff220fd47d9a108d08511d0b39b6cc38df0d7cd003805e79103abaaaa8700",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
