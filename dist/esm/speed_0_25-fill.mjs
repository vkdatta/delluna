export const name="speed_0_25-fill";
export const id="dl_3fdc9f1932efe1804bb4";
export const url=new URL("../icons/speed_0_25-fill.svg?v=b39b390a78078cdbe7a72c0f9a9a7f31cdd1a5b035414fddcadf0a29a5cb5558",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
