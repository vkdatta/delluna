export const name="frame-corners-duotone";
export const id="dl_d8af9f65e9e548c49c9f";
export const url=new URL("../icons/frame-corners-duotone.svg?v=191a46ae6739f685a87b18d2a39d5115d5c812a3b5a3fd01257de19f5905566a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
