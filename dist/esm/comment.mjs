export const name="comment";
export const id="dl_5167b27064c84b6da2e1";
export const url=new URL("../icons/comment.svg?v=c93beab72ff1e0e099c21a542270853196b44c990e3b47f7b70f53ce481437fb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
