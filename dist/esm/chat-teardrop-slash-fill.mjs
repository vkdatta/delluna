export const name="chat-teardrop-slash-fill";
export const id="dl_fa4e833d57c44de9b013";
export const url=new URL("../icons/chat-teardrop-slash-fill.svg?v=0178739bf8bcda93438f20acd8a26bf6e8a4eb623b78e7a83ad0164f014c9565",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
