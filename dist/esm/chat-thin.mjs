export const name="chat-thin";
export const id="dl_60e6b06de8eb45bda498";
export const url=new URL("../icons/chat-thin.svg?v=5900a169ab1480f2b2fc1b69f279f75f0e31dd45843bf7e3889f4fd35926f74f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
