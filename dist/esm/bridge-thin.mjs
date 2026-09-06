export const name="bridge-thin";
export const id="dl_a85c4464f3b34b30b506";
export const url=new URL("../icons/bridge-thin.svg?v=1e7023e6ee82d0bb7f2faca1eee1fff443421ebaa8eaa2460b050e033f1117a2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
