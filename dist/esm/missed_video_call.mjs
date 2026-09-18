export const name="missed_video_call";
export const id="dl_396099d634704e9ba262";
export const url=new URL("../icons/M/missed_video_call.svg?v=d0921605498f1f1aa6d48a061293368a029e0f52bc4494abf82e9bd52b13b05e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
