export const name="recycle-thin";
export const id="dl_12ad1bcf0cfe475bade2";
export const url=new URL("../icons/recycle-thin.svg?v=ad5cc08499d08949637ee134a3cf8a4a53dfe8377357d779f7a67bedc009a7d8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
