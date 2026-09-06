export const name="chats";
export const id="dl_e0403547e73b42038a70";
export const url=new URL("../icons/chats.svg?v=246d81e02c169c439a73d212bf28d4068cc727a6a527663e568f5c7da547aed3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
