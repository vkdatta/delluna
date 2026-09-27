export const name="arrow-elbow-left";
export const id="dl_6ddec2f5c0d14198ae8d";
export const url=new URL("../icons/arrow-elbow-left.svg?v=e2118c41b34a5bcc13a9bf86d89cd8bc4210fa1ae18176a496f8a6accdd3e5b9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
