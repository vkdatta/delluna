export const name="soap";
export const id="dl_233f7bde5cd8043adb32";
export const url=new URL("../icons/soap.svg?v=2178e8e23b95925e9615b9f6d614ec9c6487ad4b1f3849f161a381b962a8b71e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
