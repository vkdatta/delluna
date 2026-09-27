export const name="chat_error";
export const id="dl_7a2949d02c45eea1bfa3";
export const url=new URL("../icons/chat_error.svg?v=bd42c5241481a5c4008c08383e5ebf134308c1402da964fb45d3c3db315b52f6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
