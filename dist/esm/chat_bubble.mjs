export const name="chat_bubble";
export const id="dl_fec1ead0dbfb4e6c8d94";
export const url=new URL("../icons/C/chat_bubble.svg?v=b3c50d1d842ee0974b1473127e79d03e5a10b30a132903d003337c2773c210e4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
