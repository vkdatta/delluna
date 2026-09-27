export const name="swap-thin";
export const id="dl_776faba0f294c717d131";
export const url=new URL("../icons/swap-thin.svg?v=0edcc460458504e5cdb2e365eec177800f0417993242febb79b64094fd65914c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
