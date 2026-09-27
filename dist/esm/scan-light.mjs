export const name="scan-light";
export const id="dl_93b602fff39741cba56b";
export const url=new URL("../icons/scan-light.svg?v=eab45d27d83559e9027c86ace0ff2b0e02c3c24b6b9000446c3497ccdcd5c50e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
