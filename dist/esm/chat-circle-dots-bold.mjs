export const name="chat-circle-dots-bold";
export const id="dl_379a2be8fc6e4a1881de";
export const url=new URL("../icons/chat-circle-dots-bold.svg?v=d66acaf74092634673edc87f830f2131dd3baab19f8daecc8b47d64f4e88b6c0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
