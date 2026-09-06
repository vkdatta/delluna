export const name="meta-logo";
export const id="dl_a8059a908df54d97b9b5";
export const url=new URL("../icons/meta-logo.svg?v=a0dc281ca74a81aef097508db7fc3b266095127589168543e1c649460a9b7501",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
