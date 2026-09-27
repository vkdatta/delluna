export const name="change_circle";
export const id="dl_23794dbafdede7baa07b";
export const url=new URL("../icons/change_circle.svg?v=c7d7098a6237b81fda9a591c865bae6d71f5946d8715307d38888449fa8001a1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
