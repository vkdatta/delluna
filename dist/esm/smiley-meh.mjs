export const name="smiley-meh";
export const id="dl_828bfb93d89b4a028fcb";
export const url=new URL("../icons/S/smiley-meh.svg?v=ab36fa1f863b0ca5147e456ed23076b87d69ca828ce7533ed06501627332f1a5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
