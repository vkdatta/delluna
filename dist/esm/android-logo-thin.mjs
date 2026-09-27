export const name="android-logo-thin";
export const id="dl_4010ab718ea34f7a9169";
export const url=new URL("../icons/android-logo-thin.svg?v=8e2277be6e7b24048f99526479dd505f37f3b9ef83b9aeaaa9c0cfff684f54e9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
