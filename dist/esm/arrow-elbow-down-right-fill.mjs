export const name="arrow-elbow-down-right-fill";
export const id="dl_80930e6146f4426480e8";
export const url=new URL("../icons/arrow-elbow-down-right-fill.svg?v=70c60ab82341539327477fd87e2a150d000ce9ecfbdcb6b752fc798cf63a2fe6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
