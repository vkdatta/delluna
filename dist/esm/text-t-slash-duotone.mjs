export const name="text-t-slash-duotone";
export const id="dl_9cc59c83992d2c9f0795";
export const url=new URL("../icons/text-t-slash-duotone.svg?v=f877f1f70827585a31105bdb267a121cf1df158d024bd2da4a6123afbca4a3d1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
