export const name="feedback-fill";
export const id="dl_d4beb05e15da88008694";
export const url=new URL("../icons/feedback-fill.svg?v=26e182259a1fe0f73536376fece21c683981f6ce6b83871401e2bfc263dd3319",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
