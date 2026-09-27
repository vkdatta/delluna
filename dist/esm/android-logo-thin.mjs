export const name="android-logo-thin";
export const id="dl_4010ab718ea34f7a9169";
export const url=new URL("../icons/android-logo-thin.svg?v=04e30cad4192f03956991836577f33bbcff00f7f45d11f1dc6c27ec4b0027f3b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
