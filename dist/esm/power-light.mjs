export const name="power-light";
export const id="dl_a22f7f352e6d4cb3af89";
export const url=new URL("../icons/power-light.svg?v=04ddd4257402e6dd84528f08df89a975e744d66ccf47298e1192eb6c349339e4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
