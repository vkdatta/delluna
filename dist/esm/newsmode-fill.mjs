export const name="newsmode-fill";
export const id="dl_4c5490996c087f20fd69";
export const url=new URL("../icons/newsmode-fill.svg?v=4d96284c4e58a5c44a36d3b099fb449dc37632a053ffbf962c96f5c6bcc7587d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
