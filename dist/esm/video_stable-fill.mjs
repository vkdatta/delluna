export const name="video_stable-fill";
export const id="dl_0fb69c597c75b2440d26";
export const url=new URL("../icons/video_stable-fill.svg?v=1fc0fb498ee7fa9d5a6fcd0d558668bf4166ccd5a4e054a329bfbb36d9aa6534",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
