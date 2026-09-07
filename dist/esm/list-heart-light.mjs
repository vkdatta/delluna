export const name="list-heart-light";
export const id="dl_8b17967d10df4972901a";
export const url=new URL("../icons/list-heart-light.svg?v=9edc9c3b2c605637354bc0fadafaa2ddace0796c8277739bcc6e248c6a8a22bc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
