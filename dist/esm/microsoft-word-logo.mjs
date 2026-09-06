export const name="microsoft-word-logo";
export const id="dl_9e3bb725418b4ca9849c";
export const url=new URL("../icons/microsoft-word-logo.svg?v=76526f7aeec1b0931c56fd4c089cd53197703dd4663b46e8ba9be60333aee4d5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
