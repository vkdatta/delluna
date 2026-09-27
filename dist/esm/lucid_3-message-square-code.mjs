export const name="lucid_3-message-square-code";
export const id="dl_6892ff6163fa4086aaee";
export const url=new URL("../icons/lucid_3-message-square-code.svg?v=8a20a2ab821812cd4f0fc0c6fb559ab22f1b80218516aa58fc23843a8957fa9f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
