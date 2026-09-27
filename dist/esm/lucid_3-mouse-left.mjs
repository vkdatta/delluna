export const name="lucid_3-mouse-left";
export const id="dl_37e996dacc6c474295b4";
export const url=new URL("../icons/lucid_3-mouse-left.svg?v=d87e7d1f70d6d6d28ccddb4aac79786607857c7fc2726820890589cf7fd094a3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
