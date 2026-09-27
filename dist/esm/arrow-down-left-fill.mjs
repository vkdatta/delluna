export const name="arrow-down-left-fill";
export const id="dl_9656e0b411684a17be08";
export const url=new URL("../icons/arrow-down-left-fill.svg?v=ffadf271ddd505d12e99a0f0ac01c50f5f68f93f82302940dca6ee78e1d0b3b5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
