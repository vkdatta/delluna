export const name="closed-captioning-light";
export const id="dl_ff44a8bcacd74fe5af61";
export const url=new URL("../icons/closed-captioning-light.svg?v=c25c7a2468954849a3b7b992f42f8e1441c857981e465c72e7cecdb282183fc7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
