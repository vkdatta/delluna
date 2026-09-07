export const name="mailbox-fill";
export const id="dl_b54662b15064427b912b";
export const url=new URL("../icons/mailbox-fill.svg?v=c03082460cf92568a8faa416859d1f3779429fe4b431095b5ce121e8e7d97828",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
