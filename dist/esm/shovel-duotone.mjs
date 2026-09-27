export const name="shovel-duotone";
export const id="dl_47275a7d14060e517083";
export const url=new URL("../icons/shovel-duotone.svg?v=3edc06fd5786003c0fa432b79cd4d9e7f75bb634f1e8b7527aa726a59fbe2bb3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
