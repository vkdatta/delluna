export const name="flashlight-light";
export const id="dl_ac9d1383aaeb4098890d";
export const url=new URL("../icons/flashlight-light.svg?v=260956a8e8bce106a9e0ef2c2caf4de60cee70fcb90c655076c057a3c1709ae7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
