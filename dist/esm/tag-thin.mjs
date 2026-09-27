export const name="tag-thin";
export const id="dl_ee5d9dc286f3a01fe092";
export const url=new URL("../icons/tag-thin.svg?v=a5e912cc8d474da3c2edfecc64f73c386d52c94de30f47f487ed94e9138dacd4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
