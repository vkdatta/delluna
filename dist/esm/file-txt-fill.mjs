export const name="file-txt-fill";
export const id="dl_d31a41b3f5144688bace";
export const url=new URL("../icons/file-txt-fill.svg?v=d84bff37c2af6f1dfce3e77cda8c65c44315a07765cb20aed61c59817d504f2d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
