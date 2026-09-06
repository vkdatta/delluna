export const name="list-light";
export const id="dl_7d91f5bc7e2d4bbcb256";
export const url=new URL("../icons/list-light.svg?v=88b0c0129f0d5caa35694c71c0a0a55462517facfb052ba44f6507903785a101",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
