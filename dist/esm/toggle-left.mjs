export const name="toggle-left";
export const id="dl_eb22f89e7b0a5ac427aa";
export const url=new URL("../icons/toggle-left.svg?v=62b1b3e62a131a59cff69ecd507dd32db3fa4a70f25a63e81469435e0903284f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
