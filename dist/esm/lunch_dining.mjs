export const name="lunch_dining";
export const id="dl_59213f37ed8b4981b207";
export const url=new URL("../icons/lunch_dining.svg?v=f72b76cb93be5c6ee7d93dc34b99aa80d6b54edd8716f289bc8701b57e55232d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
