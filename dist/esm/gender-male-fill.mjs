export const name="gender-male-fill";
export const id="dl_a96cf08e41924b778d06";
export const url=new URL("../icons/gender-male-fill.svg?v=2851526e7fd206a9157c5b914c4a6ef816e668381efe7563ef5742f20f97967d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
