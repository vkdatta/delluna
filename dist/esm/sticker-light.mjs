export const name="sticker-light";
export const id="dl_67c68f0c6bc936340cc0";
export const url=new URL("../icons/sticker-light.svg?v=a54789fcba8c920a8f06566414ad63a64924cf68ad21a80d2e0cad81f7058dce",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
