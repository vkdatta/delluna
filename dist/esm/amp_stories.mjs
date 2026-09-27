export const name="amp_stories";
export const id="dl_e52abd1c9fe32d0f365b";
export const url=new URL("../icons/amp_stories.svg?v=c67c7af238ed4393d3cb112d669edeafd932c10d89599b4739b36c4543fca479",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
