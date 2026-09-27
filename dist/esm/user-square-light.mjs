export const name="user-square-light";
export const id="dl_9e053d2f179c46d58028";
export const url=new URL("../icons/user-square-light.svg?v=ed1f32864a01fca5bd60eb0f622d7a6e8737112960870ee091a7c1f3bcea5a9b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
