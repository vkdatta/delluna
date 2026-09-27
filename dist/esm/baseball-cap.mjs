export const name="baseball-cap";
export const id="dl_12a7b75157114f92b250";
export const url=new URL("../icons/baseball-cap.svg?v=62af57bb378fa1fc6f9a2751f42801ca101943201e668df48a2246f80a2b5e92",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
