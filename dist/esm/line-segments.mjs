export const name="line-segments";
export const id="dl_39a5ea9d64c8470a9b05";
export const url=new URL("../icons/line-segments.svg?v=90476cf035aa3b8445f1e1e920480df9313c01aeb8cc7b3d7f26da564b889dad",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
