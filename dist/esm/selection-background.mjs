export const name="selection-background";
export const id="dl_2da3ae918929124ffa8c";
export const url=new URL("../icons/selection-background.svg?v=4328b3b7077c26e63526d2829c822c18efdb352d236ba7cd792d657f71bc7b92",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
