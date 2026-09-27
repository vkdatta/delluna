export const name="chat-dots-bold";
export const id="dl_47b8904197804dddba4a";
export const url=new URL("../icons/chat-dots-bold.svg?v=016e72180dd96c0cf3a43243b83b3e1d1e7da996025efb560035adb60f0bd844",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
