export const name="new_label-fill";
export const id="dl_1de4b9f03b8ad1a9407a";
export const url=new URL("../icons/new_label-fill.svg?v=389c50539008dbcdedaa0834fe31018558fdaa4a80637537b8b6fb8593d5a9e5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
