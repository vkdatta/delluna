export const name="approval-fill";
export const id="dl_67f2fcc2c21e46c99661";
export const url=new URL("../icons/approval-fill.svg?v=5980722f27c92e1b944acbced75d0c519f8640ed733b6c535d71709b58b1a2b0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
