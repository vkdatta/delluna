export const name="close";
export const id="dl_a639711c4c44cbc03167";
export const url=new URL("../icons/close.svg?v=45b9f3076b3643d74afb17d873d67b68a63c2dbd2adb2f1798af7866b5167635",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
