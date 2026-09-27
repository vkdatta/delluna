export const name="text-indent-thin";
export const id="dl_a8480685b12d716ab29b";
export const url=new URL("../icons/text-indent-thin.svg?v=43469102499b33fa90f6ce4d50d025ff2f1b0f964174b67ea2b59e7e1776d829",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
