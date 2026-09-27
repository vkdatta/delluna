export const name="dot-light";
export const id="dl_f7fd87d9ec4244a085ac";
export const url=new URL("../icons/dot-light.svg?v=d896305ab9e884ce644582f4c21e4c3339ef6bfdbd7ae9d8dc5637f4b9a12c68",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
