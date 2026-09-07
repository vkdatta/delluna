export const name="align-right-simple";
export const id="dl_1a673e48696c4cd09b40";
export const url=new URL("../icons/align-right-simple.svg?v=3d4f4db5f6570a722da0e5ccb8832531537ee101f942c456462447e8b239cc42",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
