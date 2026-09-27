export const name="8k-fill";
export const id="dl_b64b3406a0459a866d88";
export const url=new URL("../icons/8k-fill.svg?v=ef93f8ec0d942b504decb894cbcca290eb5f8ebedb2665413a362038907238f8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
