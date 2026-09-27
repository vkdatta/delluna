export const name="battery_android_question-fill";
export const id="dl_d0d79169f77f009b08da";
export const url=new URL("../icons/battery_android_question-fill.svg?v=f1ef21cc89d6d37d7c8ff3f1310bb9478a89eee347c8d55e9a65d234009a5370",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
