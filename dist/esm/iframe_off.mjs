export const name="iframe_off";
export const id="dl_43a89645e49f43a6c187";
export const url=new URL("../icons/iframe_off.svg?v=dd4ac01b2dab9b4798d7f12f69ec8114adb6a2af20efdd961b4a7ad6ab960afe",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
