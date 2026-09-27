export const name="chat-teardrop-dots-thin";
export const id="dl_2002a9bb3fa94956af29";
export const url=new URL("../icons/chat-teardrop-dots-thin.svg?v=b4e6e5a2680e78f1a8726f9d8648e6019dea158789a8d982e89dc72d66799437",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
