export const name="hand-peace-duotone";
export const id="dl_f6bd647b654a42beb541";
export const url=new URL("../icons/hand-peace-duotone.svg?v=a325ea8e21a17e692a6565a51b676264eadd4f3e4ab40e1bc5cb3a110bf063c8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
