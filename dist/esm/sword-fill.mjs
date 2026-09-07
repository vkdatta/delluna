export const name="sword-fill";
export const id="dl_79b2e4a31fe643aa9424";
export const url=new URL("../icons/S/sword-fill.svg?v=39d95d1eec8ba2fb846298015c330a7d10dd85fd39b6e400774646788afc3fb2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
