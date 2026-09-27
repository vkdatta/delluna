export const name="radioactive-fill";
export const id="dl_3f45b42c9cca4e60b95e";
export const url=new URL("../icons/radioactive-fill.svg?v=20481dd01ea725767a988a921b3d430bfcbb9189516149b67d346223af231ba7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
