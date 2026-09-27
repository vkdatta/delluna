export const name="battery_android_frame_question";
export const id="dl_60cc6beb61f77d9e0a4b";
export const url=new URL("../icons/battery_android_frame_question.svg?v=2c0f30425ce118d00500dc6bc5fba8687028763f63f82c6c860842737ef3ed31",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
