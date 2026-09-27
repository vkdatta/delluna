export const name="battery_android_question-fill";
export const id="dl_79bae210c7fb4eb7244e";
export const url=new URL("../icons/battery_android_question-fill.svg?v=b42104267eccbf25f3d8161a6fa116b68861639edd56fd53136d915a6cf5e26a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
