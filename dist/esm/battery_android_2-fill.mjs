export const name="battery_android_2-fill";
export const id="dl_0c784b6114fcb6416f7f";
export const url=new URL("../icons/battery_android_2-fill.svg?v=a5c05ebbbc7f1936c99217af5608a8a6212a685c1406a5276053b3f67c79811c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
