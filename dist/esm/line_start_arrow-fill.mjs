export const name="line_start_arrow-fill";
export const id="dl_3a517b00923d2a96cd15";
export const url=new URL("../icons/line_start_arrow-fill.svg?v=1f70fb31278e0b64c96870e01578414e56101f35f3c83a507a32036621c2de2a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
