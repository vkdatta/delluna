export const name="call-bell-bold";
export const id="dl_79e61324535d4f72a6da";
export const url=new URL("../icons/call-bell-bold.svg?v=278cab291394ad13201e5222dbb8e4564ef5cc71080b02b644b6fefa5436df0c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
