export const name="selection-all-thin";
export const id="dl_7345fcb7991f16a9002c";
export const url=new URL("../icons/selection-all-thin.svg?v=88bc1e046d88d593984ca96037f5c36405651d24bce3034b2c9f26aecd642f2f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
