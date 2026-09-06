export const name="crown-cross-duotone";
export const id="dl_192a7f80a2f649e8a32f";
export const url=new URL("../icons/crown-cross-duotone.svg?v=ed0712c136b23ab5ea18ac3901c50b41a6da34378ab54bb21adf2b3b29c76dfa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
