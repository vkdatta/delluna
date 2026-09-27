export const name="capture";
export const id="dl_ef94736b1ab788a1dbb6";
export const url=new URL("../icons/capture.svg?v=a32579a19943825e02d0ebfb3603ea6122fca72152eb275aa3272cf27afaa9a2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
