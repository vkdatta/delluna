export const name="trackpad_input_2";
export const id="dl_8af8bcac96b5efd62cb8";
export const url=new URL("../icons/trackpad_input_2.svg?v=1b9dbe1527b8b2646d910dcadc42651dfefde44eeb438eb5b0d019455c4e8f2e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
