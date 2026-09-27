export const name="code-light";
export const id="dl_2ffec64305124ce799ea";
export const url=new URL("../icons/code-light.svg?v=44fb93954328e341f42b5713bec21448e7c704e0be5a7d48990952c038105242",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
