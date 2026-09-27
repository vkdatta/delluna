export const name="egg_alt-fill";
export const id="dl_5dca7c6c48b113ef8bab";
export const url=new URL("../icons/egg_alt-fill.svg?v=8792c269fb77f8ef151cf9f32eabcbf00d88f1ddd8577f2da0e1a79024cbaacb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
