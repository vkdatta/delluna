export const name="conversation-fill";
export const id="dl_38d7ac18edb297882f40";
export const url=new URL("../icons/conversation-fill.svg?v=b3be639ca0ce90800b6892e6c5afa4566f5dbdff5bd3c588f0374fea144b2bd8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
