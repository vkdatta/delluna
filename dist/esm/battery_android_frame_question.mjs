export const name="battery_android_frame_question";
export const id="dl_297468c8be5eed247a6c";
export const url=new URL("../icons/battery_android_frame_question.svg?v=0711fa997e6463d02eb57da5c517ce77d58e636f0de9836bb3cd7a5cde469f56",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
