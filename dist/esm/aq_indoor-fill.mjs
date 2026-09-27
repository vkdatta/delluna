export const name="aq_indoor-fill";
export const id="dl_52ab3e2326cebf4e56d5";
export const url=new URL("../icons/aq_indoor-fill.svg?v=0a9922ea7a3aeb81764d669505d4887cf49b248d8edceba5ee7d4dea3cde2327",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
