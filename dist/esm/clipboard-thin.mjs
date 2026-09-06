export const name="clipboard-thin";
export const id="dl_cce6a6572cea4cc49f6a";
export const url=new URL("../icons/clipboard-thin.svg?v=da6683fb3b30059ae8f3e9c2961fa44cea426a4f2cabda0171ff90d7df8ed050",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
