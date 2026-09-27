export const name="collapse_up";
export const id="dl_78147c7ea3a71f671e03";
export const url=new URL("../icons/collapse_up.svg?v=daa2a84990e1c986b6ba5770ac03ec7fdc680c5dd9e7d096150d0cd5a9aeeb90",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
