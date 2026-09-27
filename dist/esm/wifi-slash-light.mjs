export const name="wifi-slash-light";
export const id="dl_8f8335950a03c51a0d07";
export const url=new URL("../icons/wifi-slash-light.svg?v=6a8c89145041bb6863b9a73e811faf07b8ddcffc3c1001060e9a8b9dca050872",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
