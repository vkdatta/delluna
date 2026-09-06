export const name="greater-than-light";
export const id="dl_9dec16d5b20a47dd99ed";
export const url=new URL("../icons/greater-than-light.svg?v=9f445853ba78df9fda400a9eb0a4d878d8db865b6072717d94aa67ca19e5dd1a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
