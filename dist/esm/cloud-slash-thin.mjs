export const name="cloud-slash-thin";
export const id="dl_4035f17695134268bd40";
export const url=new URL("../icons/cloud-slash-thin.svg?v=40dc8141c4fda74aa922ad458b557899e3c6d20673b3c026fdb537fca3ab6285",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
