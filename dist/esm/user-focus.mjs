export const name="user-focus";
export const id="dl_42713159c254b0322c7c";
export const url=new URL("../icons/user-focus.svg?v=24fbec7fdb640b00aa17eae8555e91cfc958da8ca317199bf88b2e911ecb89fe",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
