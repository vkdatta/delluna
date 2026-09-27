export const name="align_stretch";
export const id="dl_223583243c9ace65969d";
export const url=new URL("../icons/align_stretch.svg?v=90d1ba93def713b8c22650a8b16cc2dc8f64bc70d972bc95d49010f6b69390b5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
