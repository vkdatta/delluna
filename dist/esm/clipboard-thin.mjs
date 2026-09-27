export const name="clipboard-thin";
export const id="dl_cce6a6572cea4cc49f6a";
export const url=new URL("../icons/clipboard-thin.svg?v=8971305f674f0f67b8de639e326e6dab123334fc74c3a3e005430faee16f3e5e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
