export const name="cherries-duotone";
export const id="dl_bca95862cf024d6895c0";
export const url=new URL("../icons/cherries-duotone.svg?v=2b8fd65f4fae8da047b21cd715c76f57bcf79dfadc045d6abe7da3dc1ef20c15",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
