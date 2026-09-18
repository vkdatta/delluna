export const name="drafts";
export const id="dl_1532a35dfd8e4015ae3e";
export const url=new URL("../icons/drafts.svg?v=da0de1810e06fc96ff62dd846343efe62602adc9cffeff7b8d7051b667fc4aff",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
