export const name="nest_display";
export const id="dl_041bcc320f4caff53b98";
export const url=new URL("../icons/nest_display.svg?v=a5dd2aa94d18172bd96792864b89ff31a4fb29c43aeaf0efb78996935a7b86d9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
