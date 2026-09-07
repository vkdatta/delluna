export const name="trophy-thin";
export const id="dl_6ca509464e194690802a";
export const url=new URL("../icons/T/trophy-thin.svg?v=917ffa9cbe927d34d7c3b114a6610e3c79b87051716b7eef65422911694c7f35",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
