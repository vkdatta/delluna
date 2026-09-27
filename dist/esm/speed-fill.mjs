export const name="speed-fill";
export const id="dl_8f7dfe9dfce6126c228e";
export const url=new URL("../icons/speed-fill.svg?v=b8e7e1ec93a9d0e973520167f78507dd172f5a0c139a9472e0195bc1106f52d0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
