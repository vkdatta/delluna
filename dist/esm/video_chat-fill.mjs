export const name="video_chat-fill";
export const id="dl_a4bf9d9c8c23c926f641";
export const url=new URL("../icons/video_chat-fill.svg?v=6dd757beecf529eff337d5263aaed0e6c97c418af2fb8288cb1b136e3668d14a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
