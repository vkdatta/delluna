export const name="cloud-slash-thin";
export const id="dl_4035f17695134268bd40";
export const url=new URL("../icons/cloud-slash-thin.svg?v=ad7b3d255eaf07c5c2a684d2107ccaf0be648ffba982d494dc68c09a8659a63e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
